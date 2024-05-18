// src/components/FAQSection.jsx
import React from 'react';

const FAQSection = () => {
  return (
    <section className="bg-red-500 text-white p-6">
      <h2 className="text-xl font-bold mb-4">Preguntas Frecuentes</h2>
      <ul className="list-disc list-inside">
        <li>¿Cómo puedo empezar a usar el chatbot?</li>
        <li>¿Qué temas puedo aprender?</li>
        <li>¿El chatbot es gratuito?</li>
      </ul>
    </section>
  );
};

export default FAQSection;