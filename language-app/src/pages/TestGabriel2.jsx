import React, { useState } from 'react';
import BarraDeProgreso from '../components/vocabulario/BarraDeProgreso';
import EjercicioVocabulario from '../components/vocabulario/EjercicioVocabulario';
import TopicLevelHeader from '../components/levels/TopicLevelHeader';
import Vidas from '../components/vocabulario/Vidas';

const ejercicios = [
	{
		palabra: 'Coche',
		imagen: 'https://example.com/coche.jpg',
		opciones: ['Carro', 'Casa', 'Mesa'],
		correcta: 'Carro',
	},
	{
		palabra: 'Perro',
		imagen: 'https://example.com/perro.jpg',
		opciones: ['Gato', 'Perro', 'Caballo'],
		correcta: 'Perro',
	},
	{
		palabra: 'Manzana',
		imagen: 'https://example.com/manzana.jpg',
		opciones: ['Pera', 'Plátano', 'Manzana'],
		correcta: 'Manzana',
	},
	{
		palabra: 'Casa',
		imagen: 'https://example.com/casa.jpg',
		opciones: ['Coche', 'Casa', 'Árbol'],
		correcta: 'Casa',
	},
	{
		palabra: 'Libro',
		imagen: 'https://example.com/libro.jpg',
		opciones: ['Mesa', 'Silla', 'Libro'],
		correcta: 'Libro',
	},
];

function TestGabrielPage2() {
	const [progreso, setProgreso] = useState(0);
	const [vidas, setVidas] = useState(3);
	const [indiceEjercicio, setIndiceEjercicio] = useState(0);
	const [finalizado, setFinalizado] = useState(false);

	const handleRespuesta = (correcta) => {
		setProgreso(progreso + 100 / ejercicios.length); // Incrementa el progreso sin importar si es correcto o incorrecto
		if (!correcta) {
			setVidas(vidas - 1); // Decrementa una vida por cada respuesta incorrecta
		}

		if (indiceEjercicio < ejercicios.length - 1) {
			setIndiceEjercicio(indiceEjercicio + 1);
		} else {
			setFinalizado(true); // Marca como finalizado cuando se completan todos los ejercicios
		}
	};

	const tema = 'Transporte'; // Ejemplo de tema
	const nivel = 1; // Ejemplo de nivel

	const reiniciar = () => {
		setProgreso(0);
		setVidas(3);
		setIndiceEjercicio(0);
		setFinalizado(false);
	};

	return (
		<div className="container mx-auto p-4 bg-gradient-to-r from-blue-100 to-gray-100 rounded-lg shadow-lg">
			<TopicLevelHeader topic={tema} level={nivel} />
			<BarraDeProgreso progreso={progreso} />
			<Vidas vidas={vidas} />
			{finalizado ? (
				<div className="text-center text-blue-500 text-2xl font-bold space-y-4">
					<p>¡Felicidades! Has completado todos los ejercicios.</p>
					<button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all">
						Ver Resultados
					</button>
					<button
						onClick={reiniciar}
						className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg shadow-lg hover:bg-gray-700 transition-all">
						Volver a Intentar
					</button>
				</div>
			) : vidas > 0 ? (
				<EjercicioVocabulario ejercicio={ejercicios[indiceEjercicio]} onRespuesta={handleRespuesta} />
			) : (
				<div className="text-center text-red-500 text-2xl font-bold space-y-4">
					<p>¡Has perdido todas tus vidas!</p>
					<button
						onClick={reiniciar}
						className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-700 transition-all">
						Volver a Intentar
					</button>
				</div>
			)}
		</div>
	);
}

export default TestGabrielPage2;
