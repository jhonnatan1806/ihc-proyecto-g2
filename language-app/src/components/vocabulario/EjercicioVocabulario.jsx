import React, { useState, useEffect } from 'react';

function EjercicioVocabulario({ ejercicio, onRespuesta }) {
  const [seleccion, setSeleccion] = useState(null);

  useEffect(() => {
    setSeleccion(null); // Reinicia la selección cuando cambia el ejercicio
  }, [ejercicio]);

  const handleSeleccion = (respuesta) => {
    setSeleccion(respuesta);
    setTimeout(() => {
      onRespuesta(respuesta === ejercicio.correcta);
    }, 1000); // Agrega un retraso para mostrar la respuesta correcta antes de pasar al siguiente ejercicio
  };

  return (
    <div className="my-4 p-4 border-2 rounded-lg shadow-lg text-center bg-white border-blue-300">
      <div className="mb-4 mx-auto p-4 border-2 rounded-lg shadow-inner bg-blue-50 border-blue-300" style={{ maxWidth: '200px', height: '200px' }}>
        {ejercicio.imagen ? (
          <img src={ejercicio.imagen} alt={ejercicio.palabra} className="h-full w-full object-cover rounded-lg" />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            Imagen no disponible
          </div>
        )}
      </div>
      <div className="flex justify-around flex-wrap">
        {ejercicio.opciones.map((opcion, index) => (
          <button
            key={index}
            onClick={() => handleSeleccion(opcion)}
            className={`flex-1 mx-2 my-1 px-4 py-2 rounded-lg transition-all shadow-lg ${
              seleccion
                ? opcion === ejercicio.correcta
                  ? 'bg-green-500 text-white'
                  : opcion === seleccion
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-200 text-gray-700'
                : 'bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white'
            } text-lg font-semibold`}
            disabled={seleccion}
            style={{
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}
          >
            {opcion}
          </button>
        ))}
      </div>
    </div>
  );
}

export default EjercicioVocabulario;
