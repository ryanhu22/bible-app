import React from "react";
import { TypeAnimation } from "react-type-animation";

function ChatWaiting() {
  return (
    <div className="flex w-full mt-2 space-x-3 max-w-xs">
      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
      <div>
        <div className="bg-gray-300 p-2 rounded-r-lg rounded-bl-lg">
          <p className="text-sm">
            <TypeAnimation
              sequence={[
                "please wait...", // Types 'One'
                3000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", display: "inline-block" }}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatWaiting;
