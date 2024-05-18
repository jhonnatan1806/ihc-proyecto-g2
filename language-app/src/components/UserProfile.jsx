// src/components/UserProfile.jsx
import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({ name, imageUrl }) => {
  return (
    <div className="flex items-center space-x-3">
      <img
        src={imageUrl}
        alt={name}
        className="w-10 h-10 rounded-full border-2 border-white"
      />
      <span className="text-lg font-semibold">{name}</span>
    </div>
  );
};

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default UserProfile;
