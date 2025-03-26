import React, { useState } from 'react';
import useArtPiece from '../../store/artPieceStore';
import { stopSession } from "@react-three/xr";
import './Overlay.css';
import ToolBar from './ToolBar';
import Description from './Description';
import RotateSlider from './RotateSlider';
import ScaleSlider from './ScaleSlider';
import HeightSlider from './HeightSlider';

const Overlay = () => {

    const { 
        isDescriptionVisible, setIsDescriptionVisible,
		setIsModelVisible,
        setTriggerPlaceModel,
		appState, setAppState
    } = useArtPiece()

	const toggleDescription = () => {
        setIsDescriptionVisible(!isDescriptionVisible)
	};

	const handleStopSession = async () => {
		setIsModelVisible(false)
		setAppState("placing")
		const session = await stopSession('immersive-ar')
	}

    const handlePlaceModel = () => {
		setTriggerPlaceModel(true)
	};

	return (
        <>
			<Description />

			<ToolBar />

			{ (appState === "rotating") && <RotateSlider /> }
			{ (appState === "scaling") && <ScaleSlider /> }
			{ (appState === "changeHeight") && <HeightSlider /> }

			<div className={`button-topLeft ${isDescriptionVisible ? 'hidden' : ''}`}>
				<button onClick={handleStopSession} className="round-button exit-button small-button">
                    <img src="img/svg/leave.svg" alt="Exit Icon" className="button-icon small-icon flipped" />
                </button>
			</div>
			
			{ (appState == "placing") &&
				<div className="button-bottomCenter">
					<button onClick={handlePlaceModel} className="round-button toggle-button big-button">
						<img src="img/svg/spawn.svg" alt="Toggle Icon" className="button-icon big-icon" />
					</button>
				</div>
			}

			<div className={`button-bottomRight ${(appState === "rotating" || appState === "scaling" || appState === "changeHeight") ? 'hidden' : ''}`}>
				<button onClick={toggleDescription} className="round-button toggle-button small-button">
					<img src={isDescriptionVisible ? "img/svg/arrow.svg" : "img/svg/text.svg"} alt="Toggle Icon" className="button-icon small-icon" />
				</button>
			</div>
		</>
	);
};

export default Overlay;