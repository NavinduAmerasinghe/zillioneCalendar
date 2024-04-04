import React, { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const ChatbotComponent = () => {
  const [showChatbot, setShowChatbot] = useState(true);

  const handleCloseChatbot = () => {
    setShowChatbot(false);
    window.location.reload();
  };

  return (
    <div className="relative">
      {showChatbot && (
        <div className="relative">
          <iframe
            title="CoPilot Chatbot"
            src="https://copilotstudio.microsoft.com/environments/e2093421-0d62-ed60-9376-867ffc7f9996/bots/cr6d7_copilot4_p2SGRN/webchat?__version__=2"
            width="100%"
            height="500px"
            allow="microphone; camera; geolocation"
            color="white"
            className="z-0"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default ChatbotComponent;
