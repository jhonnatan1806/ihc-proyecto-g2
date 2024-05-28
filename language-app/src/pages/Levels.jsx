import React from 'react';
import { useParams } from 'react-router-dom';
import TopicLevelHeader from '../components/levels/TopicLevelHeader';
import LearningOptionsGrid from '../components/levels/LearningOptionsGrid';

function LevelsPage() {

    const params = useParams();

    const topic = React.useRef(params.topic);
    const level = React.useRef(params.level);

	return (
		<div className="max-w-screen-lg mx-auto px-6 py-4 h-screen flex flex-col justify-between">
			{/* Componente para mostrar el tema y nivel seleccionados */}
			<TopicLevelHeader topic={topic.current} level={level.current} />

			{/* Componente para mostrar las opciones de aprendizaje */}
			<div className="flex-grow">
				<LearningOptionsGrid />
			</div>
		</div>
	);
}

export default LevelsPage;
