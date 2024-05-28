import React from 'react';
import { useParams } from 'react-router-dom';
import TopicLevelHeader from '../components/levels/TopicLevelHeader';
import LearningOptionsGrid from '../components/levels/LearningOptionsGrid';
import { getTopic } from '../services/dataFeching';
import BreadCrumbs from '../components/templates/Breadcrumbs';


function LevelsPage() {
	const params = useParams();
	const [topic, setTopicLevel] = React.useState(null);

	React.useEffect(() => {
		async function fetchData() {
			const response = await getTopic(params.topic);
			setTopicLevel(response);
		}
		fetchData();
	}, [params.topic]);

    const routesBreacrumbs = [
        {
            title: 'Inicio',
            url: '/',
        },
        {
            title: topic?.title,
            url: topic?.slug,
        },
        {
            title: topic?.levels[params.level - 1].title,
            url: topic?.levels[params.level - 1].id,
        },
    ];   


	if (!topic || !topic.levels[params.level - 1]) {
		// renderizar 404
		return <div>404</div>;
	}
    
	return (
		<div className="max-w-screen-lg mx-auto px-6 py-8 flex flex-col justify-between gap-4">
			<BreadCrumbs items={routesBreacrumbs} />
			{topic && <TopicLevelHeader topic={topic?.title} level={topic?.levels[params.level - 1].id} />}
            <h1 className='font-bold text-2xl md:text-4xl mb-2'>Expande tu conocimiento en:</h1>
			<div className="flex-grow">
				<LearningOptionsGrid />
			</div>
		</div>
	);
}

export default LevelsPage;
