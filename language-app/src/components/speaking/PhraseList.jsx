import React, { useState } from 'react';

function PhraseList({ phrases, onSelect }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className={`p-6 rounded-xl shadow-xl max-w-sm relative transition-all duration-500 ${isOpen ? 'bg-gradient-to-r from-green-400 via-teal-500 to-blue-500' : 'bg-gray-100'}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className={`text-xl font-bold ${isOpen ? 'text-white' : 'text-gray-800'}`}>Frases</h2>
        <button
          className={`px-2 py-1 ${isOpen ? 'bg-white text-teal-600' : 'bg-teal-600 text-white'} rounded hover:bg-gray-200`}
          onClick={toggleOpen}
        >
          {isOpen ? 'Ocultar' : 'Mostrar'}
        </button>
      </div>
      {isOpen && (
        <div className="bg-white rounded-lg shadow-inner p-2 overflow-y-auto max-h-64 border-2 border-teal-500">
          <ul className="space-y-2">
            {phrases.map((phrase, index) => (
              <li
                key={index}
                className="px-3 py-2 rounded-lg bg-white bg-opacity-80 hover:bg-opacity-100 transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105 cursor-pointer"
                onClick={() => onSelect(phrases[index])}
              >
                <span className="text-teal-600 font-medium">{phrase.portuguese}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}

export default PhraseList;
