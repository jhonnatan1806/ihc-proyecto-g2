import React from 'react';
import CircularProgress from '../components/results/CircularProgress';
import Message from '../components/results/Message';
import ActionButtons from '../components/results/ActionButtons';
import VoiceFlowChat from '../components/results/VoiceFlowChat';

const ResultsPage = ({ porcentaje }) => {
	return (
		<div className="flex flex-col items-center justify-center p-4 my-8 md:h-[80vh]">
			<div className="bg-sky-100 bg-opacity-90 p-10 rounded-3xl shadow-xl max-w-3xl w-full border border-gray-200">
				<div className="flex flex-col items-center">
					<CircularProgress porcentaje={porcentaje} />
					<Message porcentaje={porcentaje} />
					<ActionButtons />
				</div>
			</div>
            <VoiceFlowChat />
		</div>
	);
};

export default ResultsPage;
