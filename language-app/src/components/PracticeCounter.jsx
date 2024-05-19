import React from 'react';
import PropTypes from 'prop-types';

const PracticeDays = ({ days }) => {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-white shadow hover:bg-rose-100">
      <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
        <span role="img" aria-label="fire" className="text-2xl">🔥</span>
      </div>
      <div className="ml-4">
        <h1 className="text-xl font-bold text-gray-800">{days}</h1>
        <p className="text-gray-500">Dias de Prática Consecutiva</p>
      </div>
    </div>
  );
};

PracticeDays.propTypes = {
  days: PropTypes.number.isRequired,
};

export default PracticeDays;