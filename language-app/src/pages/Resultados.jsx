import React from 'react';
import CircularProgress from '../components/resultados/CircularProgress';
import Message from '../components/resultados/Message';
import ActionButtons from '../components/resultados/ActionButtons';

const Resultados = ({ porcentaje }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-sky-100 bg-opacity-90 p-10 rounded-3xl shadow-xl max-w-3xl w-full transition-transform duration-500 hover:scale-105 mt-16 border border-gray-200">
        <div className="flex flex-col items-center">
          <CircularProgress porcentaje={porcentaje} />
          <Message porcentaje={porcentaje} />
          <ActionButtons />
        </div>
      </div>
    </div>
  );
};

export default Resultados;
