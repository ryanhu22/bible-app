import { useState, useEffect, useRef } from "react";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import ChatWindow from "./ChatWindow";

function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const chatWindowRef = useRef(null);

  const handleClick = () => {
    console.log("CLICKED");
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button className="" onClick={handleClick}>
        {isOpen ? (
          <XCircleIcon className="h-8 xl:h-10 text-gray-600 cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
        ) : (
          <ChatBubbleOvalLeftEllipsisIcon className="h-8 xl:h-10 text-gray-600 cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
        )}
      </button>
      {isOpen && (
        <div
          ref={chatWindowRef}
          className="h-1/2 w-3/4 md:w-1/2 xl:w-1/3 fixed bottom-16 xl:bottom-20 right-4 xl:right-6 bg-white rounded-lg shadow-lg"
        >
          <div className="flex flex-col items-center justify-center h-full text-black">
            <ChatWindow />
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatButton;
