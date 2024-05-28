import React from 'react';
import { Card } from '@nextui-org/react';

function TopicLevelHeader({ topic, level }) {
	return (
		<Card className="mb-4 p-2 flex justify-between items-center gap-1 border-2 border-blue-500 bg-blue-100 shadow-lg">
			<h1 className="text-xl font-bold">{topic}</h1>
			<span className="bg-blue-500 text-white text-lg font-semibold px-3 py-1 rounded-full">Nivel: {level}</span>
		</Card>
	);
}

export default TopicLevelHeader;
