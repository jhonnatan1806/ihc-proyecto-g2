import React from 'react';
import { Card } from '@nextui-org/react';

function TopicLevelHeader({ title, level }) {
	return (
		<Card className="py-4 flex justify-between items-center gap-1 border-2 border-blue-500 bg-blue-100 shadow-lg">
			<h1 className="text-xl font-bold">{title}</h1>
			<span className="bg-blue-500 text-white text-lg font-semibold px-3 py-1 rounded-full">Nivel: {level}</span>
		</Card>
	);
}

export default TopicLevelHeader;
