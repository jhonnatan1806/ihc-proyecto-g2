import React from 'react';
import LearningOptionCard from './LearningOptionCard';
import { FaMicrophone, FaBook, FaHeadphones, FaBookReader } from 'react-icons/fa';

function LearningOptionsGrid(props) {
	const options = [
		{
			title: 'Hablado',
			description: 'Improve your pronunciation and speaking skills.',
			Icon: FaMicrophone,
			path: 'speaking',
		},
		{
			title: 'Vocabulario',
			description: 'Expand your Portuguese vocabulary with new words.',
			Icon: FaBook,
			path: 'vocabulary',
		},
		{
			title: 'Escucha',
			description: 'Enhance your listening skills with exercises.',
			Icon: FaHeadphones,
			path: 'listening',
		},
		{
			title: 'Lectura',
			description: 'Practice reading comprehension with texts.',
			Icon: FaBookReader,
			path: 'reading',
		},
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
			{options.map((option, index) => (
				<LearningOptionCard
					key={index}
					title={option.title}
					description={option.description}
					Icon={option.Icon}
					href={`/${props.topic}/${props.level}/${option.path}`}
				/>
			))}
		</div>
	);
}

export default LearningOptionsGrid;
