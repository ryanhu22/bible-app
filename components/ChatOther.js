import React from "react";

function ChatOther({ message }) {
  return (
    <div className="flex w-full mt-2 space-x-3 max-w-xs">
      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
      <div>
        <div className="bg-gray-300 p-2 rounded-r-lg rounded-bl-lg">
          <p className="text-sm">{message}</p>
        </div>
        {/* <span className="text-xs text-gray-500 leading-none pt-2">
          2 min ago
        </span> */}
      </div>
    </div>
  );
}

export default ChatOther;
