import React from 'react';
import { FaEllipsisV } from 'react-icons/fa';

const ChatList = () => {
  return (
    <aside className="bg-purple-100 p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Historial de Chats</h2>
      <ul>
        <li className="flex items-center justify-between py-3 px-4 hover:bg-purple-200 transition duration-300">
          <span className="text-gray-800">Chat 1</span>
          <div className="flex space-x-2">
            <button className="text-gray-500 hover:text-gray-800 focus:outline-none">
              <FaEllipsisV />
            </button>
          </div>
        </li>
        <li className="flex items-center justify-between py-3 px-4 hover:bg-purple-200 transition duration-300">
          <span className="text-gray-800">Chat 2</span>
          <div className="flex space-x-2">
            <button className="text-gray-500 hover:text-gray-800 focus:outline-none">
              <FaEllipsisV />
            </button>
          </div>
        </li>
        <li className="flex items-center justify-between py-3 px-4 hover:bg-purple-200 transition duration-300">
          <span className="text-gray-800">Chat 3</span>
          <div className="flex space-x-2">
            <button className="text-gray-500 hover:text-gray-800 focus:outline-none">
              <FaEllipsisV />
            </button>
          </div>
        </li>
      </ul>
      <button className="bg-purple-400 text-white p-3 mt-6 rounded-md hover:bg-purple-500 transition duration-300 shadow-md transform hover:scale-105 focus:outline-none">
        Nuevo Chat
      </button>
    </aside>
  );
};

export default ChatList;
