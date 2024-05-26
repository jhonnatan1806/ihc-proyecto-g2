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
    <div className="my-4 p-4 border-2 rounded-lg shadow-lg text-center bg-white transition-transform transform hover:scale-105 border-blue-300">
      <div className="mb-4 mx-auto p-4 border-2 rounded-lg shadow-inner bg-blue-50 border-blue-300" style={{ maxWidth: '200px', height: '200px' }}>
        {ejercicio.imagen ? (
          <img src={ejercicio.imagen} alt={ejercicio.palabra} className="h-full w-full object-cover rounded-lg" />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            Imagen no disponible
          </div>
        )}
      </div>
      <div className="flex justify-around">
        {ejercicio.opciones.map((opcion, index) => (
          <button
            key={index}
            onClick={() => handleSeleccion(opcion)}
            className={`px-4 py-2 rounded-lg transition-all transform hover:scale-110 ${
              seleccion
                ? opcion === ejercicio.correcta
                  ? 'bg-green-500'
                  : opcion === seleccion
                  ? 'bg-red-500'
                  : 'bg-gray-200'
                : 'bg-blue-500 hover:bg-blue-700'
            } text-white shadow-lg`}
            disabled={seleccion}
          >
            {opcion}
          </button>
        ))}
      </div>
    </div>
  );
}

export default EjercicioVocabulario;
