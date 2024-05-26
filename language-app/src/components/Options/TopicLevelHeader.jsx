import React from 'react';
import { Card } from '@nextui-org/react';

function TopicLevelHeader({ topic, level }) {
  return (
    <Card className="mb-4 p-2 flex justify-between items-center">
      <div className="text-left">
        <h1 className="text-xl font-bold mb-2">{topic}</h1>
      </div>
      <div className="text-right">
        <span className="bg-blue-100 text-blue-800 text-lg font-semibold px-3 py-1 rounded-full">
          Nivel: {level}
        </span>
      </div>
    </Card>
  );
}

export default TopicLevelHeader;
