import React from 'react';
import PropTypes from 'prop-types';

const LanguageProgress = ({ progress, language }) => {
  const languageText = language === 'portugues' ? 'Português' : 'Espanhol';

  return (
    <div className="flex items-center border border-gray-300 rounded-lg p-4 bg-white shadow hover:bg-rose-100">
      <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
        <span role="img" aria-label="book" className="text-2xl">📘</span>
      </div>
      <div className="ml-4">
        <h1 className="text-xl font-bold text-gray-800">{progress}%</h1>
        <p className="text-gray-500">aprendido em {languageText}</p>
      </div>
    </div>
  );
};

LanguageProgress.propTypes = {
  progress: PropTypes.number.isRequired,
  language: PropTypes.oneOf(['portugues', 'espanhol']).isRequired,
};

export default LanguageProgress;