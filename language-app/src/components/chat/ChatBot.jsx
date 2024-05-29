// src/components/ChatBot.jsx
import React, { useState, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { text: '¡Hola! ¿Cómo puedo ayudarte hoy?', isUser: false },
  ]);

  const handleSendMessage = (message) => {
    setMessages([...messages, { text: message, isUser: true }]);
    // Simulate bot response
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Estoy aquí para ayudarte con tu aprendizaje de español-portugués.', isUser: false },
      ]);
    }, 1000);
  };

  useEffect(() => {
    const chatContainer = document.querySelector('#chat-container');
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [messages]);

  return (
    <div className="flex flex-col h-full p-4 bg-white">
      <div id="chat-container" className="flex-grow overflow-y-auto p-2 border border-gray-300 rounded-md shadow-inner">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg.text} isUser={msg.isUser} />
        ))}
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatBot;
