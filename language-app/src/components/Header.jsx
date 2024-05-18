// src/components/Header.jsx
import React from 'react';
import PropTypes from 'prop-types';
import UserProfile from './UserProfile';

const Header = ({ user }) => {
  return (
    <header className="bg-yellow-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">Chat Bot</h1>
      <div className="flex items-center space-x-4">
        <UserProfile name={user.name} imageUrl={user.imageUrl} />
        <button className="bg-yellow-500 p-2 rounded-full hover:bg-yellow-400 transition duration-300">
          <span className="material-icons">settings</span>
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default Header;