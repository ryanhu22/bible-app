import { useState, useEffect, useRef } from "react";
import React from "react";
import ReactHtmlParser from "react-html-parser";
import highlightRange from "dom-highlight-range";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useSession } from "next-auth/react";
import { doc, collection, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

// TODO: add save to DB after deleting a comment

function Passage({ passageHTML, searchFunc, book, chapter }) {
  const { data: session } = useSession();
  const [clearHighlightArray, setClearHighlightArray] = useState([]);
  const [isPageButtonDisabled, setPageButtonDisabled] = useState(false);

  // Props for selection pop-up
  const [showPopup, setShowPopup] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [popupX, setPopupX] = useState(0);
  const [popupY, setPopupY] = useState(0);

  // Props for comment-functionality
  const [commentInput, setCommentInput] = useState("");
  const [globalRange, setGlobalRange] = useState();
  const [inputPopupX, setInputPopupX] = useState(0);
  const [inputPopupY, setInputPopupY] = useState(0);

  // Refs
  const propRef = useRef(null); // Used for saving the HTML for this prop

  const bookCutoffs = {
    genesis: 50,
    exodus: 40,
    leviticus: 27,
    numbers: 36,
    deuteronomy: 34,
    joshua: 24,
    judges: 21,
    ruth: 4,
    "1samuel": 31,
    "2samuel": 24,
    "1kings": 22,
    "2kings": 25,
    "1chronicles": 29,
    "2chronicles": 36,
    ezra: 10,
    nehemiah: 13,
    esther: 10,
    job: 42,
    psalms: 150,
    proverbs: 31,
    ecclesiastes: 12,
    songofsolomon: 8,
    isaiah: 66,
    jeremiah: 52,
    lamentations: 5,
    ezekiel: 48,
    daniel: 12,
    hosea: 14,
    joel: 3,
    amos: 9,
    obadiah: 1,
    jonah: 4,
    micah: 7,
    nahum: 3,
    habakkuk: 3,
    zephaniah: 3,
    haggai: 2,
    zechariah: 14,
    malachi: 4,
    matthew: 28,
    mark: 16,
    luke: 24,
    john: 21,
    acts: 28,
    romans: 16,
    "1corinthians": 16,
    "2corinthians": 13,
    galatians: 6,
    ephesians: 6,
    philippians: 4,
    colossians: 4,
    "1thessalonians": 5,
    "2thessalonians": 3,
    "1timothy": 6,
    "2timothy": 4,
    titus: 3,
    philemon: 1,
    hebrews: 13,
    james: 5,
    "1peter": 5,
    "2peter": 3,
    "1john": 5,
    "2john": 1,
    "3john": 1,
    jude: 1,
    revelation: 22,
  };

  const bookOrder = {
    genesis: ["revelation", "exodus"],
    exodus: ["genesis", "leviticus"],
    leviticus: ["exodus", "numbers"],
    numbers: ["leviticus", "deuteronomy"],
    deuteronomy: ["numbers", "joshua"],
    joshua: ["deuteronomy", "judges"],
    judges: ["joshua", "ruth"],
    ruth: ["judges", "1samuel"],
    "1samuel": ["ruth", "2samuel"],
    "2samuel": ["1samuel", "1kings"],
    "1kings": ["2samuel", "2kings"],
    "2kings": ["1kings", "1chronicles"],
    "1chronicles": ["2kings", "2chronicles"],
    "2chronicles": ["1chronicles", "ezra"],
    ezra: ["2chronicles", "nehemiah"],
    nehemiah: ["ezra", "esther"],
    esther: ["nehemiah", "job"],
    job: ["esther", "psalms"],
    psalms: ["job", "proverbs"],
    proverbs: ["psalms", "ecclesiastes"],
    ecclesiastes: ["proverbs", "songofsolomon"],
    songofsolomon: ["ecclesiastes", "isaiah"],
    isaiah: ["songofsolomon", "jeremiah"],
    jeremiah: ["isaiah", "lamentations"],
    lamentations: ["jeremiah", "ezekiel"],
    ezekiel: ["lamentations", "daniel"],
    daniel: ["ezekiel", "hosea"],
    hosea: ["daniel", "joel"],
    joel: ["hosea", "amos"],
    amos: ["joel", "obadiah"],
    obadiah: ["amos", "jonah"],
    jonah: ["obadiah", "micah"],
    micah: ["jonah", "nahum"],
    nahum: ["micah", "habakkuk"],
    habakkuk: ["nahum", "zephaniah"],
    zephaniah: ["habakkuk", "haggai"],
    haggai: ["zephaniah", "zechariah"],
    zechariah: ["haggai", "malachi"],
    malachi: ["zechariah", "matthew"],
    matthew: ["malachi", "mark"],
    mark: ["matthew", "luke"],
    luke: ["mark", "john"],
    john: ["luke", "acts"],
    acts: ["john", "romans"],
    romans: ["acts", "1corinthians"],
    "1corinthians": ["romans", "2corinthians"],
    "2corinthians": ["1corinthians", "galatians"],
    galatians: ["2corinthians", "ephesians"],
    ephesians: ["galatians", "philippians"],
    philippians: ["ephesians", "colossians"],
    colossians: ["philippians", "1thessalonians"],
    "1thessalonians": ["colossians", "2thessalonians"],
    "2thessalonians": ["1thessalonians", "1timothy"],
    "1timothy": ["2thessalonians", "2timothy"],
    "2timothy": ["1timothy", "titus"],
    titus: ["2timothy", "philemon"],
    philemon: ["titus", "hebrews"],
    hebrews: ["philemon", "james"],
    james: ["hebrews", "1peter"],
    "1peter": ["james", "2peter"],
    "2peter": ["1peter", "1john"],
    "1john": ["2peter", "2john"],
    "2john": ["1john", "3john"],
    "3john": ["2john", "jude"],
    jude: ["3john", "revelation"],
    revelation: ["jude", "genesis"],
  };

  // Grabbing window size
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Utility for adding comments - need to constantly grab window selection
  useEffect(() => {
    function handleSelection() {
      const selection = window.getSelection();
      if (!selection.isCollapsed) {
        // Grab range, other inputs
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        const x_coord = rect.x + rect.width / 2;
        const y_coord = rect.y + window.scrollY - 50;

        // For comment hover
        setGlobalRange(range);
        setInputPopupX(x_coord);
        setInputPopupY(y_coord);
      }
    }
    document.addEventListener("mouseup", handleSelection);
    return () => {
      document.removeEventListener("mouseup", handleSelection);
    };
  }, []);

  const saveHTMLToDB = async (user_email, book, chapter, curr_html) => {
    const bookRef = collection(db, "Users", user_email, book);
    await setDoc(doc(bookRef, chapter), {
      chapter: chapter,
      html: curr_html,
    });
  };

  const getPreviousPage = async (e) => {
    setPageButtonDisabled(true);
    clearAllHighlights();
    const curr_chapter_int = parseInt(chapter);
    // Go to previous book
    if (curr_chapter_int - 1 < 1) {
      const prev_book = bookOrder[book][0];
      searchFunc(e, prev_book, bookCutoffs[prev_book].toString());
    } else {
      searchFunc(e, book, (curr_chapter_int - 1).toString());
    }
    setPageButtonDisabled(false);
  };

  const getNextPage = async (e) => {
    setPageButtonDisabled(true);
    clearAllHighlights();
    const curr_chapter_int = parseInt(chapter);
    // Go to next book
    if (curr_chapter_int + 1 > bookCutoffs[book]) {
      const next_book = bookOrder[book][1];
      searchFunc(e, next_book, "1");
    } else {
      searchFunc(e, book, (curr_chapter_int + 1).toString());
    }
    setPageButtonDisabled(false);
  };

  // Variables for styling
  const popupPositionStyle = {
    top: popupY - 150,
    // right: popupX >= 400 ? 550 : popupX, windowWidth - 300
    left: popupX + 300 <= windowWidth - 100 ? popupX + 100 : windowWidth - 300,
  };

  const handleSelection = () => {
    var selection = null;
    if (window.getSelection) {
      selection = window.getSelection();
    } else if (typeof document.selection !== "undefined") {
      selection = document.selection;
    }

    if (selection.type === "Range") {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      setPopupX(rect.x + rect.width / 2);
      setPopupY(rect.y + window.scrollY);
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  };

  const highlight = (color) => {
    const selection = window.getSelection();
    if (selection) {
      if (!selection.isCollapsed) {
        const range = selection.getRangeAt(0);

        const clearHighlight = highlightRange(range, "span", {
          class: `bg-${color}-100`,
        });
        const uniqueId =
          Date.now().toString(36) + Math.random().toString(36).substring(2, 5);
        addHighlight(uniqueId, clearHighlight);
      }

      // Remove user selection
      if (selection.empty) {
        selection.empty();
      }
    }
    const curr_html = propRef.current.outerHTML;
    if (session?.user) {
      saveHTMLToDB(session.user.email, book, chapter, curr_html);
    }
    setShowPopup(false);
  };

  const highlightYellow = () => {
    const selection = window.getSelection();
    if (selection) {
      if (!selection.isCollapsed) {
        const range = selection.getRangeAt(0);

        const clearHighlight = highlightRange(range, "span", {
          class: `bg-yellow-100`,
        });
        const uniqueId =
          Date.now().toString(36) + Math.random().toString(36).substring(2, 5);
        addHighlight(uniqueId, clearHighlight);
      }

      // Remove user selection
      if (selection.empty) {
        selection.empty();
      }
    }
    const curr_html = propRef.current.outerHTML;
    if (session?.user) {
      saveHTMLToDB(session.user.email, book, chapter, curr_html);
    }
    setShowPopup(false);
  };
  const highlightBlue = () => {
    const selection = window.getSelection();
    if (selection) {
      if (!selection.isCollapsed) {
        const range = selection.getRangeAt(0);

        const clearHighlight = highlightRange(range, "span", {
          class: `bg-blue-100`,
        });
        const uniqueId =
          Date.now().toString(36) + Math.random().toString(36).substring(2, 5);
        addHighlight(uniqueId, clearHighlight);
      }

      // Remove user selection
      if (selection.empty) {
        selection.empty();
      }
    }
    const curr_html = propRef.current.outerHTML;
    if (session?.user) {
      saveHTMLToDB(session.user.email, book, chapter, curr_html);
    }
    setShowPopup(false);
  };

  const highlightRed = () => {
    const selection = window.getSelection();
    if (selection) {
      if (!selection.isCollapsed) {
        const range = selection.getRangeAt(0);

        const clearHighlight = highlightRange(range, "span", {
          class: `bg-red-100`,
        });
        const uniqueId =
          Date.now().toString(36) + Math.random().toString(36).substring(2, 5);
        addHighlight(uniqueId, clearHighlight);
      }

      // Remove user selection
      if (selection.empty) {
        selection.empty();
      }
    }
    const curr_html = propRef.current.outerHTML;
    if (session?.user) {
      saveHTMLToDB(session.user.email, book, chapter, curr_html);
    }
    setShowPopup(false);
  };

  const unHighlight = () => {
    const selection = window.getSelection();
    if (selection) {
      if (!selection.isCollapsed) {
        const range = selection.getRangeAt(0);
        const clearHighlight = highlightRange(range, "span", {
          class: "bg-white",
        });
        const uniqueId =
          Date.now().toString(36) + Math.random().toString(36).substring(2, 5);
        addHighlight(uniqueId, clearHighlight);
      }

      // Remove user selection
      if (selection.empty) {
        selection.empty();
      }
    }
    const curr_html = propRef.current.outerHTML;
    if (session?.user) {
      saveHTMLToDB(session.user.email, book, chapter, curr_html);
    }
    setShowPopup(false);
  };

  const submitComment = (e, commentInput) => {
    e.preventDefault();
    commentInput = commentInput.trim();
    const uniqueId =
      Date.now().toString(36) + Math.random().toString(36).substring(2, 5);

    const clearHighlight = highlightRange(globalRange, "span", {
      id: uniqueId,
      class: "bg-yellow-400 hover:bg-yellow-300 cursor-pointer",
      onClick: `commentClick("${uniqueId}")`,
      onMouseEnter: `showCommentScriptFunc("${commentInput}", ${inputPopupX}, ${inputPopupY})`,
      onMouseLeave: `hideCommentScriptFunc(${inputPopupX}, ${inputPopupY})`,
    });
    addHighlight(uniqueId, clearHighlight);

    // Cleanup
    const curr_html = propRef.current.outerHTML;
    if (session?.user) {
      saveHTMLToDB(session.user.email, book, chapter, curr_html);
    }
    setCommentInput("");
    setShowPopup(false);
  };

  // Short utility functions
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const addHighlight = (unique_id, highlightFunc) => {
    setClearHighlightArray((prevState) => {
      return [...prevState, [unique_id, highlightFunc]];
    });
  };

  const handleCommentInputChange = (e) => {
    setCommentInput(e.target.value);
  };

  // Handle clear highlights
  const clearAllHighlights = () => {
    // clearHighlightArray.map(([id_val, clearFunction]) => clearFunction());
    setClearHighlightArray([]);
  };

  return (
    <HelmetProvider>
      <div>
        <div>
          <div>
            {/* Highlight Modal */}
            {showPopup && (
              <div
                className="absolute rounded-md mx-auto bg-white border border-black z-50"
                style={popupPositionStyle}
              >
                <div className="px-6 py-2 rounded-b-md">
                  <h2 className="text-sm font-bold text-gray-900 text-center">
                    Choose a highlight color
                  </h2>
                  <div className="flex mt-4 justify-center items-center gap-4">
                    <button
                      className="w-6 h-6 rounded-full bg-yellow-300 hover:border hover:border-black hover:scale-125 transition-all duration-150 ease-out"
                      onClick={highlightYellow}
                    ></button>
                    <button
                      className="w-6 h-6 rounded-full bg-blue-300 hover:border hover:border-black hover:scale-125 transition-all duration-150 ease-out"
                      onClick={highlightBlue}
                    ></button>
                    <button
                      className="w-6 h-6 rounded-full bg-red-300 hover:border hover:border-black hover:scale-125 transition-all duration-150 ease-out"
                      onClick={highlightRed}
                    ></button>
                    <button
                      className="w-6 h-6 rounded-full bg-purple-300 hover:border hover:border-black hover:scale-125 transition-all duration-150 ease-out"
                      onClick={unHighlight}
                    ></button>
                  </div>
                </div>
                <div className="py-4 px-6 rounded-t-md">
                  <h2 className="text-sm font-bold text-gray-900 text-center">
                    Or type a comment...
                  </h2>

                  <form
                    className="flex bg-gray-50 items-center border border-gray-400 rounded-md mt-4 py-4 px-2"
                    onSubmit={(e) => submitComment(e, commentInput)}
                  >
                    <input
                      className="w-full bg-transparent focus:outline-none"
                      id="message"
                      placeholder="Add a comment..."
                      value={commentInput}
                      onChange={handleCommentInputChange}
                    ></input>
                    <div className="">
                      <button type="submit">
                        <PaperAirplaneIcon className="h-6 -rotate-45 text-gray-600 cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
            {/* Rest of the page - buttons, text */}
            <div className="flex" onMouseUp={handleSelection}>
              <div className="fixed left-3 xl:left-10 top-1/2 transform -translate-y-1/2">
                <button
                  onClick={(e) => getPreviousPage(e)}
                  disabled={isPageButtonDisabled}
                >
                  <ArrowLeftCircleIcon className="h-8 xl:h-10 text-gray-600 cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
                </button>
              </div>
              <div className="px-3">
                <div className="" ref={propRef} id="passagediv">
                  <div dangerouslySetInnerHTML={{ __html: passageHTML }} />
                </div>
              </div>

              <Helmet>
                {/* invisible element to body, useEffect that when something's appended to body, clear mod */}
                <script>
                  {`function commentClick(commentID) {
                      const spans = document.querySelectorAll('span');
                      // Loop through the spans and delete the one with id="abc"
                      spans.forEach((span) => {
                        if (span.id === commentID) {
                          while (span.firstChild) {
                            span.parentNode.insertBefore(span.firstChild, span);
                          }
                        }
                      });
                  }`}
                </script>
              </Helmet>

              <Helmet>
                <script>
                  {`function showCommentScriptFunc(commentText, x_coord, y_coord) {
                    const comment = document.createElement('div');
                    comment.style.position = "absolute";
                    comment.style.left = x_coord + "px";
                    comment.style.top = y_coord + "px";
                    comment.textContent = commentText;
                    comment.style.border = '1px solid black';
                    comment.style.borderRadius = '5px';
                    comment.style.backgroundColor = 'white';
                    comment.style.padding = '5px';
                    comment.style.textAlign = 'center';
                    comment.style.margin = '10px';
                    const passageDiv = document.getElementById('passagediv');
                    passageDiv.appendChild(comment);
                  }`}
                </script>
              </Helmet>

              <Helmet>
                <script>
                  {`function hideCommentScriptFunc(x_coord, y_coord) {
                    const passageDiv = document.getElementById('passagediv');
                    const lastDiv = passageDiv.lastChild;
                    passageDiv.removeChild(lastDiv);
                  }`}
                </script>
              </Helmet>

              <div className="fixed right-3 xl:right-10 top-1/2 transform -translate-y-1/2">
                <button
                  onClick={(e) => getNextPage(e)}
                  disabled={isPageButtonDisabled}
                >
                  <ArrowRightCircleIcon className="h-8 xl:h-10 text-gray-600 cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Passage;
