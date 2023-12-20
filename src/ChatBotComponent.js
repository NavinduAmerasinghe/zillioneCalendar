import React from 'react';

const ChatbotComponent = () => {
  return (
    <div>
      <iframe
        title="CoPilot Chatbot"
        src="https://copilotstudio.microsoft.com/environments/Default-6b4abc02-e40b-4d50-9fef-944a68196da3/bots/cr3b3_copilot1/webchat?__version__=2%22"
        width="100%"
        height="600px" // Adjust the height as needed
        allow="microphone; camera; geolocation"
      ></iframe>
    </div>
  );
};

export default ChatbotComponent;
