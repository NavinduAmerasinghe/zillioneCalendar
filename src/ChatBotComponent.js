import React from 'react';

const ChatbotComponent = () => {
  return (
    <div>
      <iframe
        title="CoPilot Chatbot"
        src="https://copilotstudio.microsoft.com/environments/e2093421-0d62-ed60-9376-867ffc7f9996/bots/cr6d7_aiCalendarChatBot/webchat?__version__=2"
        width="100%"
        height="600px" // Adjust the height as needed
        allow="microphone; camera; geolocation"
      ></iframe>
    </div>
  );
};

export default ChatbotComponent;
