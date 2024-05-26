import React from 'react';
import { Card } from '@nextui-org/react';

function TopicLevelHeader({ topic, level }) {
  return (
    <Card className="mb-4 p-2 flex justify-between items-center border-2 border-blue-500 bg-blue-100 shadow-lg">
      <div className="text-left">
        <h1 className="text-xl font-bold mb-2">{topic}</h1>
      </div>
      <div className="text-right">
        <span className="bg-blue-500 text-white text-lg font-semibold px-3 py-1 rounded-full">
          Nivel: {level}
        </span>
      </div>
    </Card>
  );
}

export default TopicLevelHeader;
