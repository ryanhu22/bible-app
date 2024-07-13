import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import ChatButton from "../../components/ChatButton";
import PassageMobile from "../../components/PassageMobile";
import PassageDesktop from "../../components/PassageDesktop";
import Search from "../../components/Search";
import BurgerMenu from "../../components/BurgerMenu";
import { signIn, signOut, useSession } from "next-auth/react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function SearchPage() {
  const [isMobile, setIsMobile] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const { query } = router.query;
  const [book, setBook] = useState("");
  const [chapter, setChapter] = useState("");
  const [bookInput, setBookInput] = useState("");
  const [chapterInput, setChapterInput] = useState("");
  const [passageHTML, setPassageHTML] = useState("");
  const [isSignOutOpen, setIsSignOutOpen] = useState(false);
  const signOutRef = useRef(null);

  // Determine if mobile or desktop view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // set initial state based on window width

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch the query
  useEffect(() => {
    if (!query) {
      return;
    }
    const splitQuery = query.trim().split("-");
    setChapter(splitQuery.pop());
    setBook(splitQuery.join(" "));
  }, [query]);

  // UseEffects ==================================
  // Fetch book / chapter from query
  useEffect(() => {
    if (book && chapter) {
      search(null, book, chapter);
    } else {
    }
  }, [book, chapter]);

  // Collapses the sign out menu on outside click
  useEffect(() => {
    window.addEventListener("click", handleClickOutsideSignOut);

    return () => {
      window.removeEventListener("click", handleClickOutsideSignOut);
    };
  }, []);

  // Functions ==================================
  const handleBookInputChange = (e) => {
    setBookInput(e.target.value);
  };

  const handleChapterInputChange = (e) => {
    setChapterInput(e.target.value);
  };

  function handleSignOutPopupClick() {
    setIsSignOutOpen((isSignOutOpen) => !isSignOutOpen);
  }

  function handleClickOutsideSignOut(event) {
    if (signOutRef.current && !signOutRef.current.contains(event.target)) {
      setIsSignOutOpen(false);
    }
  }

  function separateNumberAndCapitalize(inputString) {
    if (inputString === "songofsolomon") {
      return "Song of Solomon";
    }
    const regex = /(\d+)([a-zA-Z]+)/g;
    const match = regex.exec(inputString);

    if (match) {
      const number = match[1];
      const word = match[2]
        .toLowerCase()
        .replace(/^\w/, (c) => c.toUpperCase());
      return `${number} ${word}`;
    } else {
      return inputString.toLowerCase().replace(/^\w/, (c) => c.toUpperCase());
    }
  }

  const search = async (e, book, chapter) => {
    if (e) {
      e.preventDefault();
    }
    if (!chapter) {
      chapter = 1;
    }

    const bookQuery = book.toLowerCase().replace(/\s/g, "");
    const chapterQuery = chapter.replace(/\s/g, "");
    var passage_text = await searchNoUser(bookQuery, chapterQuery);
    setPassageHTML(passage_text);
    setBook(book);
    setChapter(chapter);
    // See if there is a saved HTML
    var override_passage_text = null;
    if (session?.user) {
      override_passage_text = await searchExistingUser(bookQuery, chapterQuery);
      if (override_passage_text && override_passage_text !== passage_text) {
        setPassageHTML(override_passage_text);
      }
    }
    router.push(`/search/${bookQuery}-${chapterQuery}`);
  };

  const searchExistingUser = async (bookQuery, chapterQuery) => {
    const docRef = doc(
      db,
      "Users",
      session?.user.email,
      bookQuery,
      chapterQuery
    );
    var docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const passage_text = docSnap.data()["html"];
      return passage_text;
    } else {
      return null;
    }
  };

  const searchNoUser = async (bookQuery, chapterQuery) => {
    const docRef = doc(db, bookQuery, chapterQuery);
    var docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const passage_text = docSnap.data()["html"];
      return passage_text;
    } else {
      return null;
    }
  };

  return (
    <div className="">
      <Head>
        <title>Bible Assistant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Sign in */}
      <div className="sticky top-0 z-50 bg-white">
        {session ? (
          <div className="flex items-center justify-between w-full">
            <div className="pb-3 z-1">
              <BurgerMenu currentBook={book} />
            </div>
            <div ref={signOutRef}>
              <img
                onClick={handleSignOutPopupClick}
                src={session?.user?.image}
                alt="profile picture"
                className="h-10 w-10 rounded-full cursor-pointer hover:scale-125 transition-all duration-150 ease-out"
              />
              {isSignOutOpen && (
                <div className="absolute right-0 top-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <button
                    className="block text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer disabled"
                    role="menuitem"
                    onClick={signOut}
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between w-full">
            <div className="pb-3 z-1">
              <BurgerMenu currentBook={book} />
            </div>
            {/* <button
              className="py-2 px-4 bg-blue-300 hover:bg-blue-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={signIn}
            >
              Sign in
            </button> */}
          </div>
        )}
      </div>

      <div className="">
        <Search
          bookInput={bookInput}
          handleBookInputChange={handleBookInputChange}
          chapterInput={chapterInput}
          handleChapterInputChange={handleChapterInputChange}
          searchFunc={search}
        />
      </div>

      <p className="grid py-4 border-b-2 place-items-center text-3xl font-bold uppercase tracking-wide text-black">
        {separateNumberAndCapitalize(book)} {chapter}
      </p>

      {isMobile ? (
        <div>
          <div className="mx-3 xl:mx-16">
            <PassageMobile
              passageHTML={passageHTML}
              searchFunc={search}
              book={book}
              chapter={chapter}
            />
          </div>
        </div>
      ) : (
        <div>
          <div className="mx-3 xl:mx-16">
            <PassageDesktop
              passageHTML={passageHTML}
              searchFunc={search}
              book={book}
              chapter={chapter}
            />
          </div>
        </div>
      )}

      <ChatButton />
    </div>
  );
}
