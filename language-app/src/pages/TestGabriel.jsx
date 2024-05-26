import React from 'react';
import TopicLevelHeader from '../components/Options/TopicLevelHeader';
import LearningOptionsGrid from '../components/Options/LearningOptionsGrid';

function TestGabriel() {
  // Por ahora, usa valores fijos para el tema y nivel
  const topic = 'Viajes';
  const level = '12';

  return (
    <div className="container mx-auto p-4 h-screen flex flex-col justify-between">
      {/* Componente para mostrar el tema y nivel seleccionados */}
      <TopicLevelHeader topic={topic} level={level} />
      
      {/* Componente para mostrar las opciones de aprendizaje */}
      <div className="flex-grow">
        <LearningOptionsGrid />
      </div>
    </div>
  );
}

export default TestGabriel;


