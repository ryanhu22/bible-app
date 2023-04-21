import React from "react";
import { useSession } from "next-auth/react";

function ChatMe({ message }) {
  const { data: session } = useSession();
  return (
    <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
      <div className="flex flex-col items-end">
        <div className="bg-blue-600 text-white p-2 rounded-l-lg rounded-br-lg">
          <p className="text-sm">{message}</p>
        </div>
        {/* <span className="text-xs text-gray-500 leading-none pt-2">
          2 min ago
        </span> */}
      </div>
      {session ? (
        <img
          // onClick={signOut}
          src={session?.user?.image}
          alt="profile picture"
          className="h-10 w-10 rounded-full"
        />
      ) : (
        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
      )}
    </div>
  );
}

export default ChatMe;
