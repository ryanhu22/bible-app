import { useState, useEffect, useRef } from "react";
import ChatOther from "./ChatOther";
import ChatMe from "./ChatMe";
import ChatWaiting from "./ChatWaiting";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import { Typing } from "react-type-animation";

function ChatWindow() {
  const { data: session } = useSession();
  const [messages, setMessages] = useState([
    { from: "me", text: "Hello, it's me" },
    { from: "them", text: "Hello, it's a computer" },
  ]);
  const [userInput, setUserInput] = useState("");
  const inputRef = useRef();
  const messagesEndRef = useRef(null);
  const [responseWaiting, setResponseWaiting] = useState(false);

  const handleUserInputChange = (e) => {
    const newUserInput = e.target.value;
    setUserInput(newUserInput);
  };

  // API call to ChatGPT
  async function gpt_api(e, request) {
    e.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ request: request }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }
      return data.result;
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  const addMessage = (newMessage) => {
    setMessages((oldMessages) => {
      return [...oldMessages, newMessage];
    });
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    // Add user message
    const userInputCopy = userInput;
    const newMessage = {
      from: "me",
      text: userInput,
    };
    setUserInput("");
    inputRef.current.value = "";
    addMessage(newMessage);
    setResponseWaiting(true);

    var responseMessage = "";
    // await ChatGPT response
    const response = await gpt_api(e, userInputCopy);
    responseMessage = {
      from: "other",
      text: response,
    };

    addMessage(responseMessage);
    setResponseWaiting(false);
  };
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col flex-grow w-full bg-white shadow-xl rounded-lg overflow-hidden">
      <div className="flex flex-col flex-grow h-0 p-4 overflow-auto bg-gray-50 scrollbar scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
        {messages.map((message) => {
          if (message.from === "me") {
            return <ChatMe key={message.id} message={message.text} />;
          } else {
            return <ChatOther key={message.id} message={message.text} />;
          }
        })}
        {responseWaiting ? <ChatWaiting /> : null}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t-2">
        <form className="flex items-center">
          <input
            type="text"
            placeholder="Example: Who is Jesus?"
            className="border-none flex-1 focus:ring-0 outline-none text-s"
            onChange={(e) => handleUserInputChange(e)}
            ref={inputRef}
          />
          <button
            type="submit"
            className="font-semibold text-blue-400"
            onClick={(e) => sendMessage(e)}
          >
            <PaperAirplaneIcon className="h-8 text-gray-700 -rotate-45 hover:text-gray-400" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatWindow;
