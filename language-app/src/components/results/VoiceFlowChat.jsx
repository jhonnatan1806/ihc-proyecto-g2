import React, { useEffect } from 'react';

const VoiceFlowChat = () => {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
		script.type = 'text/javascript';
		script.onload = () => {
			window.voiceflow.chat.load({
				verify: { projectID: '66500b6b606b18721be9dcf5' },
				url: 'https://general-runtime.voiceflow.com',
				versionID: 'production',
			});
		};

		document.head.appendChild(script);

		return () => {
			document.head.removeChild(script);
		};
	}, []);

	return <></>;
};

export default VoiceFlowChat;
