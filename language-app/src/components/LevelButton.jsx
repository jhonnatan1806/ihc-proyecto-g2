import React from 'react';
import PropTypes from 'prop-types';

const LevelButton = ({ level, stars, onClick }) => {
    
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center bg-pink-500 rounded-lg p-4 w-64 hover:bg-pink-600 transition duration-300 ease-in-out focus:outline-none"
    >
      <div className="text-black text-2xl font-bold mb-2">NÍVEL {level}</div>
      <div className="w-full border-t border-black mb-2"></div>
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-8 h-8 ${index < stars ? 'text-yellow-500' : 'text-gray-400'}`}
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.402 8.182L12 18.897l-7.336 3.85 1.402-8.182L.666 9.211l8.2-1.193L12 .587z"/>
          </svg>
        ))}
      </div>
    </button>
  );
};

LevelButton.propTypes = {
  level: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LevelButton;
