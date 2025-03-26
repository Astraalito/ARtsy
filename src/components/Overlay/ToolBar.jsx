import React, { useState } from 'react';
import useArtPiece from '../../store/artPieceStore';
import { ARButton, stopSession } from "@react-three/xr";

const ToolBar = () => {

    const { 
        isDescriptionVisible, setIsDescriptionVisible,
        isModelVisible, setIsModelVisible,
        appState, setAppState
    } = useArtPiece()

    const hideModel = () => {
		console.log(isModelVisible)
		setIsModelVisible(false)
        setAppState("placing")
	}

    const toggleRotating = () => {
        (appState != "rotating") ? setAppState("rotating") : setAppState("placed")
    }

    const toggleScaling = () => {
        (appState != "scaling") ? setAppState("scaling") : setAppState("placed")
    }

    const toggleChangeHeight = () => {
        (appState != "changeHeight") ? setAppState("changeHeight") : setAppState("placed")
    }

    return (
        <>
            <div className={`tools-container ${((appState != "placing") && !isDescriptionVisible) ? 'displayed' : ''}`}>

                <button onClick={hideModel} className="round-button exit-button small-button">
                    <img src="img/svg/exit.svg" alt="Exit Icon" className="button-icon small-icon" />
                </button>

                <button onClick={toggleRotating} className={`round-button toggle-button small-button ${ (appState == "rotating") ? 'active' : ''}`}>
                    <img src="img/svg/rotate.svg" alt="Toggle Icon" className="button-icon small-icon" />
                </button>
                
                <button onClick={toggleScaling} className={`round-button toggle-button small-button ${ (appState == "scaling") ? 'active' : ''}`}>
                    <img src="img/svg/scale.svg" alt="Toggle Icon" className="button-icon small-icon" />
                </button>

                <button onClick={toggleChangeHeight} className={`round-button toggle-button small-button ${ (appState == "changeHeight") ? 'active' : ''}`}>
                    <img src="img/svg/upDown.svg" alt="Toggle Icon" className="button-icon small-icon" />
                </button>

            </div>
        </>
    );
};

export default ToolBar;