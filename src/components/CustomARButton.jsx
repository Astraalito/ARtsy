import React from 'react';
import { startSession } from "@react-three/xr";

const CustomARButton = () => {
	const handleStartSession = async () => {
		await startSession('immersive-ar', {
			requiredFeatures: ["hit-test"],
			optionalFeatures: ["dom-overlay"],
			domOverlay: { root: document.body }
		});
	};

	return (
		<button onClick={handleStartSession} className="round-button button-startAR">
			<img src="img/svg/start-ar.svg" alt="AR Icon" className="ar-icon button-icon big-icon" />
			Découvrir en AR !
		</button>
	);
};

export default CustomARButton;