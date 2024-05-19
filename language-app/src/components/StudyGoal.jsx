import React from 'react';
import PropTypes from 'prop-types';

const StudyGoal = ({ goal, consecutiveDays }) => {
  const remainingDays = goal - consecutiveDays;

  return (
    <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-white shadow hover:bg-rose-100">
      <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
        <span role="img" aria-label="target" className="text-2xl">🎯</span>
      </div>
      <div className="ml-4">
        <h1 className="text-xl font-bold text-gray-800">{remainingDays}</h1>
        <p className="text-gray-500">dias restantes para atingir sua meta de {goal} dias</p>
      </div>
    </div>
  );
};

StudyGoal.propTypes = {
  goal: PropTypes.number.isRequired,
  consecutiveDays: PropTypes.number.isRequired,
};

export default StudyGoal;
