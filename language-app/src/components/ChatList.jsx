// src/components/ChatList.jsx
import React from 'react';

const ChatList = () => {
  return (
    <aside className="bg-gray-200 p-4 border-r border-gray-300">
      <h2 className="text-lg font-semibold mb-4">Historial de Chats</h2>
      <ul>
        <li className="py-2 border-b border-gray-300">Chat 1</li>
        <li className="py-2 border-b border-gray-300">Chat 2</li>
        <li className="py-2 border-b border-gray-300">Chat 3</li>
      </ul>
      <button className="bg-blue-500 text-white p-2 mt-4 rounded-md hover:bg-blue-400 transition duration-300">
        Nuevo Chat
      </button>
    </aside>
  );
};

export default ChatList;