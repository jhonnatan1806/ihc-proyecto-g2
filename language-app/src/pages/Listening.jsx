import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTopic } from '../services/dataFeching';
import { Card } from '@nextui-org/react';

import TopicLevelHeader from '../components/levels/TopicLevelHeader';
import PhrasePlayer from '../components/speaking/PhrasePlayer';
import PhraseList from '../components/speaking/PhraseList';
import BreadCrumbs from '../components/templates/Breadcrumbs';

function ListeningPage() {
	const initialPhrase = { portuguese: 'Olá, como você está?', spanish: 'Hola, ¿cómo estás?' };

	const [phrase, setPhrase] = useState(initialPhrase);

	const params = useParams();
	const [topic, setTopic] = React.useState(null);
	const [level, setLevel] = React.useState(null);
	//const [speaking, setSpeaking] = React.useState(null);

	React.useEffect(() => {
		async function fetchData() {
			const topicData = await getTopic(params.topic);
			setTopic(topicData);
			setLevel(topicData.levels[params.level - 1]);
			//setSpeaking(topicData.levels[params.level - 1].speaking);
		}
		fetchData();
	}, [params.topic, params.level]);

	const handlePlay = () => {
		console.log('Reproduciendo frase...');
	};

	const handleRepeat = () => {
		console.log('Repetiendo frase...');
	};

	const handleSelectPhrase = (newPhrase) => {
		setPhrase(newPhrase);
	};

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
		{
			title: 'Escucha',
			url: 'Listening',
		},
	];

	return (
		<div className="bg-gradient-to-r from-blue-100 to-gray-100">
			<div className="max-w-screen-lg mx-auto py-6 px-6 flex flex-col gap-4 items-top">
				<div className="flex flex-col gap-4 w-full">
					<BreadCrumbs items={routesBreacrumbs} />
					{level && <TopicLevelHeader title={level.title} chip={['nivel:', level.id].join(' ')} />}
				</div>
				<div className="flex-grow flex flex-col md:flex-row items-start justify-between w-full gap-4">
					<PhraseList
						phrases={[
							initialPhrase,
							{ portuguese: 'Bom dia!', spanish: '¡Buenos días!' },
							{ portuguese: 'Boa noite.', spanish: 'Buenas noches.' },
							{ portuguese: 'Como vai?', spanish: '¿Cómo va?' },
							{ portuguese: 'Tudo bem?', spanish: '¿Todo bien?' },
							{ portuguese: 'Até logo!', spanish: '¡Hasta luego!' },
							{ portuguese: 'Obrigado!', spanish: '¡Gracias!' },
							{ portuguese: 'Desculpe.', spanish: 'Perdón.' },
							{ portuguese: 'Eu te amo.', spanish: 'Te amo.' },
							{ portuguese: 'Feliz aniversário!', spanish: '¡Feliz cumpleaños!' },
						]}
						onSelect={handleSelectPhrase}
					/>
					<div className="flex-grow flex flex-col items-center justify-between gap-4">
						<Card className="shadow-md select-none w-full">
							<PhrasePlayer
								phrasePortuguese={phrase.portuguese}
								phraseSpanish={phrase.spanish}
								onPlay={handlePlay}
								onRepeat={handleRepeat}
							/>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ListeningPage;
