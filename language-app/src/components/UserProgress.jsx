import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const UserProgressProfile = ({ imageUrl, progress }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex items-center justify-center w-40 h-40 transform transition-transform duration-300 hover:scale-110">
        <CircularProgressbar
          value={progress}
          styles={buildStyles({
            pathColor: '#FFD700',
            trailColor: '#d6d6d6',
            strokeLinecap: 'round',
          })}
        />
        <div className="absolute flex items-center justify-center w-36 h-36 bg-white rounded-full border-4 border-yellow-500 transition-opacity duration-300 hover:opacity-50">
          <img
            src={imageUrl}
            alt="User"
            className="w-32 h-32 rounded-full"
          />
          <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
};

UserProgressProfile.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
};

export default UserProgressProfile;
