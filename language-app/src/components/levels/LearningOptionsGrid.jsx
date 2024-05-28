import React from 'react';
import LearningOptionCard from './LearningOptionCard';
import { FaMicrophone, FaBook, FaHeadphones, FaBookReader } from 'react-icons/fa';

function LearningOptionsGrid() {
	const options = [
		{ title: 'Speaking', description: 'Improve your pronunciation and speaking skills.', Icon: FaMicrophone },
		{ title: 'Vocabulary', description: 'Expand your Portuguese vocabulary with new words.', Icon: FaBook },
		{ title: 'Listening', description: 'Enhance your listening skills with exercises.', Icon: FaHeadphones },
		{ title: 'Reading', description: 'Practice reading comprehension with texts.', Icon: FaBookReader },
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
			{options.map((option, index) => (
				<LearningOptionCard key={index} title={option.title} description={option.description} Icon={option.Icon} />
			))}
		</div>
	);
}

export default LearningOptionsGrid;
