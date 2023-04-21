import { useRef } from "react";

function Search({
  bookInput,
  handleBookInputChange,
  chapterInput,
  handleChapterInputChange,
  searchFunc,
}) {
  return (
    <div>
      <form
        className="w-full max-w-sm pt-2 pb-3"
        onSubmit={(e) => searchFunc(e, bookInput, chapterInput)}
      >
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 px-1">
          Jump to...
        </label>
        <div className="flex items-center border-b py-2">
          <input
            type="text"
            value={bookInput}
            onChange={handleBookInputChange}
            placeholder="Genesis"
            className="focus:ring-0 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          />
          <input
            type="text"
            value={chapterInput}
            onChange={handleChapterInputChange}
            placeholder="1"
            className="focus:ring-0 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          />
          <button
            type="submit"
            className="flex-shrink-0 bg-gray-500 hover:bg-gray-400 border-none text-sm border-4 text-white py-1 px-2 rounded"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
