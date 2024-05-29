import React, { useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';

const ChatList = () => {
  const [chats, setChats] = useState(['Chat 1', 'Chat 2', 'Chat 3']);
  const [activeMenu, setActiveMenu] = useState(null);
  const [editingChat, setEditingChat] = useState(null);
  const [newChatName, setNewChatName] = useState('');

  const handleMenuClick = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
    setEditingChat(null);
  };

  const handleDelete = (index) => {
    const newChats = chats.filter((_, i) => i !== index);
    setChats(newChats);
    setActiveMenu(null);
  };

  const handleEdit = (index) => {
    setEditingChat(index);
    setNewChatName(chats[index]);
  };

  const handleSaveEdit = (index) => {
    const newChats = [...chats];
    newChats[index] = newChatName;
    setChats(newChats);
    setEditingChat(null);
    setActiveMenu(null);
  };

  return (
    <aside className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl shadow-xl max-w-sm relative">
      <h2 className="text-2xl font-bold mb-4 text-blue-900">Chat Bot</h2>
      <ul className="mb-6 relative z-10">
        {chats.map((chat, index) => (
          <li
            key={index}
            className="relative flex items-center justify-between py-3 px-4 mb-2 rounded-lg bg-white bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105"
          >
            {editingChat === index ? (
              <input
                type="text"
                value={newChatName}
                onChange={(e) => setNewChatName(e.target.value)}
                className="text-blue-900 font-medium flex-grow mr-2 border border-blue-300 rounded-md"
              />
            ) : (
              <span className="text-blue-900 font-medium">{chat}</span>
            )}
            <div className="flex space-x-2 relative z-20">
              <button
                className="text-gray-500 hover:text-blue-800 focus:outline-none"
                onClick={() => handleMenuClick(index)}
              >
                <FaEllipsisV />
              </button>
              {activeMenu === index && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-30">
                  <ul>
                    {editingChat === index ? (
                      <li
                        className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleSaveEdit(index)}
                      >
                        Guardar
                      </li>
                    ) : (
                      <>
                        <li
                          className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleEdit(index)}
                        >
                          Cambiar Nombre
                        </li>
                        <li
                          className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleDelete(index)}
                        >
                          Eliminar Chat
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-3 px-6 mt-4 rounded-lg hover:bg-gradient-to-l hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg transform hover:scale-105 focus:outline-none text-lg">
        Nuevo Chat
      </button>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4 text-blue-900">Escoge la Personalidad del Bot</h3>
        <ul>
          {['Ayudante', 'Divertido', 'Serio', 'Informativo'].map((personality, index) => (
            <li
              key={index}
              className="flex items-center justify-center py-2 px-4 mb-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105 cursor-pointer"
            >
              {personality}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default ChatList;
