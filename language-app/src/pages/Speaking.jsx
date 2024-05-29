import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTopic } from '../services/dataFeching';

import TopicLevelHeader from '../components/levels/TopicLevelHeader';
import PhrasePlayer from '../components/speaking/PhrasePlayer';
import Timer from '../components/speaking/Timer';
import MicrophoneRecorder from '../components/speaking/MicrophoneRecorder';
import PhraseList from '../components/speaking/PhraseList';

function SpeakingPage() {
	const initialPhrase = { portuguese: 'Olá, como você está?', spanish: 'Hola, ¿cómo estás?' };

	const [isRecording, setIsRecording] = useState(false);
	const [phrase, setPhrase] = useState(initialPhrase);

	const params = useParams();
	const [level, setLevel] = React.useState(null);
	//const [speaking, setSpeaking] = React.useState(null);

	React.useEffect(() => {
		async function fetchData() {
			const topicData = await getTopic(params.topic);
			setLevel(topicData.levels[params.level - 1]);
			//setSpeaking(topicData.levels[params.level - 1].speaking);
		}
		fetchData();
	}, [params.topic, params.level]);

	const handleRecord = (recording) => {
		setIsRecording(recording);
	};

	const handlePlay = () => {
		console.log('Reproduciendo frase...');
	};

	const handleRepeat = () => {
		console.log('Repetiendo frase...');
	};

	const handleSelectPhrase = (newPhrase) => {
		setPhrase(newPhrase);
		setIsRecording(false);
	};

	return (
		<div className="max-w-screen-lg mx-auto py-12 px-6 flex flex-col items-center">
			<div className="w-full mb-5">
				{level && <TopicLevelHeader title={level.title} chip={['nivel:', level.id].join(' ')} />}
			</div>
			<div className="flex-grow flex flex-row items-start justify-between w-full max-w-5xl">
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
				<div className="flex-grow flex flex-col items-center justify-between p-4">
					<Timer isRecording={isRecording} />
					<PhrasePlayer
						phrasePortuguese={phrase.portuguese}
						phraseSpanish={phrase.spanish}
						onPlay={handlePlay}
						onRepeat={handleRepeat}
					/>
					<div className="mt-1">
						<MicrophoneRecorder onRecord={handleRecord} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default SpeakingPage;
