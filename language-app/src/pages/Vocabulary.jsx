import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTopic } from '../services/dataFeching';

import BarraDeProgreso from '../components/vocabulario/BarraDeProgreso';
import EjercicioVocabulario from '../components/vocabulario/EjercicioVocabulario';
import TopicLevelHeader from '../components/levels/TopicLevelHeader';
import Vidas from '../components/vocabulario/Vidas';

function VocabularyPage() {
	const params = useParams();
	const [level, setLevel] = React.useState(null);
	const [vocabulary, setVocabulary] = React.useState(null);

	React.useEffect(() => {
		async function fetchData() {
			const topicData = await getTopic(params.topic);
			setLevel(topicData.levels[params.level - 1]);
			setVocabulary(topicData.levels[params.level - 1].vocabulary);
		}
		fetchData();
	}, [params.topic, params.level]);

	const [progreso, setProgreso] = useState(0);
	const [lifes, setVidas] = useState(3);
	const [exerciseIndex, setExcerciseIndex] = useState(0);
	const [finish, setFinish] = useState(false);

	const handleResponse = (isCorrect) => {
		setProgreso(progreso + 100 / vocabulary.length); // Incrementa el progreso sin importar si es correcto o incorrecto
		if (!isCorrect) {
			setVidas(lifes - 1); // Decrementa una vida por cada respuesta incorrecta
		}
		if (exerciseIndex < vocabulary.length - 1) {
			setExcerciseIndex(exerciseIndex + 1);
		} else {
			setFinish(true); // Marca como finalizado cuando se completan todos los ejercicios
		}
	};

	const reset = () => {
		setProgreso(0);
		setVidas(3);
		setExcerciseIndex(0);
		setFinish(false);
	};

	return (
		<div className='bg-gradient-to-r from-blue-100 to-gray-100'>
			<div className="max-w-screen-lg mx-auto px-6 py-16">
				{level && <TopicLevelHeader title={level.title} chip={[exerciseIndex+1,'/',vocabulary.length]} />}

				<BarraDeProgreso progreso={progreso} />
				<Vidas vidas={lifes} />
				{finish ? (
					<div className="text-center text-blue-500 text-2xl font-bold space-y-4">
						<p>¡Felicidades! Has completado todos los ejercicios.</p>
						<div className="flex items-center justify-center gap-4 mt-2">
							<button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all">
								Ver Resultados
							</button>
							<button
								onClick={reset}
								className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow-lg hover:bg-gray-700 transition-all">
								Volver a Intentar
							</button>
						</div>
					</div>
				) : lifes > 0 ? (
					<EjercicioVocabulario excercice={vocabulary && vocabulary[exerciseIndex]} onResponse={handleResponse} />
				) : (
					<div className="text-center text-red-500 text-2xl font-bold space-y-4">
						<p>¡Has perdido todas tus vidas!</p>
						<button
							onClick={reset}
							className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-700 transition-all">
							Volver a Intentar
						</button>
					</div>
				)}
			</div>
		</div>
	);
}

export default VocabularyPage;
