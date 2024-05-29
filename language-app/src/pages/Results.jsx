import React from 'react';
import CircularProgress from '../components/resultados/CircularProgress';
import Message from '../components/resultados/Message';
import ActionButtons from '../components/resultados/ActionButtons';

const ResultsPage = ({ porcentaje }) => {
	return (
		<div className="flex flex-col items-center justify-center p-4 my-8">
			<div className="bg-sky-100 bg-opacity-90 p-10 rounded-3xl shadow-xl max-w-3xl w-full border border-gray-200">
				<div className="flex flex-col items-center">
					<CircularProgress porcentaje={porcentaje} />
					<Message porcentaje={porcentaje} />
					<ActionButtons />
				</div>
			</div>
		</div>
	);
};

export default ResultsPage;
