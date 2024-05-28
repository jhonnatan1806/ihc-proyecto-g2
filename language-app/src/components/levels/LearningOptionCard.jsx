import React from 'react';
import { Card, Button } from '@nextui-org/react';
import { FaMicrophone, FaBook, FaHeadphones, FaBookReader } from 'react-icons/fa';

function LearningOptionCard({ title, description, Icon }) {
  return (
    <Card
      className="w-full p-4 text-center flex flex-col items-center justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      style={{ minHeight: '150px', maxHeight: '200px' }} // Ajuste de la altura
    >
      <div className="flex flex-col items-center">
        <div className="mb-2 text-3xl">
          <Icon />
        </div>
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-500 mb-4 text-center">{description}</p>
      </div>
      <Button shadow color="primary" auto>
        Start {title}
      </Button>
    </Card>
  );
}

export default LearningOptionCard;



