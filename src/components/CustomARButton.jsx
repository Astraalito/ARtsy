import React, { useEffect, useState } from 'react';
import { startSession } from "@react-three/xr";

const CustomARButton = () => {
	const [isARCompatible, setIsARCompatible] = useState(false);

	useEffect(() => {
		const checkARCompatibility = async () => {
			if (navigator.xr) {
				try {
					const session = await navigator.xr.isSessionSupported('immersive-ar');
					setIsARCompatible(session);
				} catch (error) {
					console.error('AR is not supported by this device.', error);
					setIsARCompatible(false);
				}
			} else {
				console.error('WebXR is not supported by this browser.');
				setIsARCompatible(false);
			}
		};

		checkARCompatibility();
	}, []);

	const handleStartSession = async () => {
		if (isARCompatible) {
			await startSession('immersive-ar', {
				requiredFeatures: ["hit-test"],
				optionalFeatures: ["dom-overlay"],
				domOverlay: { root: document.body }
			});
		}
	};

	return (
		<button
			onClick={handleStartSession}
			className={`round-button button-startAR ${isARCompatible ? '' : 'disabled'}`}
			disabled={!isARCompatible}
		>
			<img src="img/svg/start-ar.svg" alt="AR Icon" className="ar-icon button-icon big-icon" />
			{isARCompatible ? 'Découvrir en AR !' : 'AR non pris en charge'}
		</button>
	);
};

export default CustomARButton;
