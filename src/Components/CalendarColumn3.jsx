import React from 'react'
import ChatbotComponent from "./ChatBotComponent";
import { FaRobot } from "react-icons/fa";

export const CalendarColumn3 = ({toggleChatbot, showChatbot , chatBotStyles}) => {
  return(
    <div className="w-2/7 " style={!showChatbot ? {} : chatBotStyles}>
    {!showChatbot && (
      <button
        className="fixed bottom-10 right-16 bg-blue-500 text-white p-4 shadow-md float-right"
        onClick={toggleChatbot}
      >
        <FaRobot className="text-2xl" />
      </button>
    )}

    {showChatbot && (
      // <div ref={chatbotRef} style={{ height: 500, overflow: "auto" }}>
      <div style={{ height: 500, overflow: "auto",marginTop:"20px",marginBottom:"20px",marginRight:"20px" }}>
        <ChatbotComponent />
      </div>
    )}
  </div>
   )

 }