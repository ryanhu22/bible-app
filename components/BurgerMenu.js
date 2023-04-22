import { useEffect, useState, useRef } from "react";
import { Bars3Icon, Bars3BottomLeftIcon } from "@heroicons/react/24/outline";

function BurgerMenu({ currentBook }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const booksOT = [
    "Genesis",
    "Exodus",
    "Leviticus",
    "Numbers",
    "Deuteronomy",
    "Joshua",
    "Judges",
    "Ruth",
    "1 Samuel",
    "2 Samuel",
    "1 Kings",
    "2 Kings",
    "1 Chronicles",
    "2 Chronicles",
    "Ezra",
    "Nehemiah",
    "Esther",
    "Job",
    "Psalms",
    "Proverbs",
    "Ecclesiastes",
    "Song of Solomon",
    "Isaiah",
    "Jeremiah",
    "Lamentations",
    "Ezekiel",
    "Daniel",
    "Hosea",
    "Joel",
    "Amos",
    "Obadiah",
    "Jonah",
    "Micah",
    "Nahum",
    "Habakkuk",
    "Zephaniah",
    "Haggai",
    "Zechariah",
    "Malachi",
  ];
  const booksNT = [
    "Matthew",
    "Mark",
    "Luke",
    "John",
    "Acts",
    "Romans",
    "1 Corinthians",
    "2 Corinthians",
    "Galatians",
    "Ephesians",
    "Philippians",
    "Colossians",
    "1 Thessalonians",
    "2 Thessalonians",
    "1 Timothy",
    "2 Timothy",
    "Titus",
    "Philemon",
    "Hebrews",
    "James",
    "1 Peter",
    "2 Peter",
    "1 John",
    "2 John",
    "3 John",
    "Jude",
    "Revelation",
  ];

  function handleButtonClick() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  function handleClickOutside(event) {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }

  // Collapses the menu on outside click
  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="" ref={menuRef}>
        <button
          className="p-2 text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900"
          onClick={handleButtonClick}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>

        {isOpen && (
          <div className="absolute h-[70vh] overflow-y-auto left-2 mt-2 w-full md:w-3/4 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div>
              {/* Old Testament */}
              <a
                className="block text-center px-4 py-2 text-sm text-gray-700 bg-gray-50 cursor-pointer disabled"
                role="menuitem"
              >
                Old Testament
              </a>
              <div
                className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {booksOT.map((book) =>
                  book.toLowerCase().replace(/\s/g, "") === currentBook ? (
                    <a
                      href={
                        "/search/" +
                        book.toLowerCase().replace(/\s/g, "") +
                        "-" +
                        "1"
                      }
                      className="block font-bold px-4 py-2 text-sm text-gray-700 bg-blue-100 hover:text-gray-900 cursor-pointer"
                      role="menuitem"
                    >
                      {book}
                    </a>
                  ) : (
                    <a
                      href={
                        "/search/" +
                        book.toLowerCase().replace(/\s/g, "") +
                        "-" +
                        "1"
                      }
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      {book}
                    </a>
                  )
                )}
              </div>
              {/* New Testament */}
              <a
                className="block text-center px-4 py-2 text-sm text-gray-700 bg-gray-50 cursor-pointer disabled"
                role="menuitem"
              >
                New Testament
              </a>
              <div
                className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {booksNT.map((book) =>
                  book.toLowerCase().replace(/\s/g, "") === currentBook ? (
                    <a
                      href={
                        "/search/" +
                        book.toLowerCase().replace(/\s/g, "") +
                        "-" +
                        "1"
                      }
                      className="block font-bold px-4 py-2 text-sm text-gray-700 bg-blue-100 hover:text-gray-900 cursor-pointer"
                      role="menuitem"
                    >
                      {book}
                    </a>
                  ) : (
                    <a
                      href={
                        "/search/" +
                        book.toLowerCase().replace(/\s/g, "") +
                        "-" +
                        "1"
                      }
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      {book}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BurgerMenu;
