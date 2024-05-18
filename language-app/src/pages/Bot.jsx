// src/pages/Bot.jsx
import React, { useState } from 'react';
import ChatBot from '../components/ChatBot';
import Header from '../components/Header';
import ChatList from '../components/ChatList';

const BotPage = () => {
  const user = {
    name: 'Juan Pérez',
    imageUrl: 'https://via.placeholder.com/150',
  };

  const [isChatListOpen, setIsChatListOpen] = useState(true);

  const toggleChatList = () => {
    setIsChatListOpen(!isChatListOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header user={user} />
      <div className="flex flex-1">
        {isChatListOpen && <ChatList />}
        <main className="flex-grow">
          <ChatBot />
        </main>
      </div>
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2024 Plataforma de Aprendizaje
      </footer>
      <button
        className="fixed bottom-10 right-10 bg-green-500 text-white p-3 rounded-full shadow-lg"
        onClick={toggleChatList}
      >
        {isChatListOpen ? (
          <span className="material-icons">keyboard_arrow_left</span>
        ) : (
          <span className="material-icons">keyboard_arrow_right</span>
        )}
      </button>
    </div>
  );
};

export default BotPage;



