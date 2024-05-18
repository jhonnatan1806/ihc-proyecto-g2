// src/components/UserProfile.jsx
import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({ name, imageUrl }) => {
  return (
    <div className="flex items-center space-x-4">
      <img src={imageUrl} alt={`${name}'s profile`} className="w-10 h-10 rounded-full" />
      <span className="font-medium text-white">{name}</span>
    </div>
  );
};

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default UserProfile;