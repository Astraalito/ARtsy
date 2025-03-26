import React from 'react';
import useArtPiece from '../../store/artPieceStore';

const ScaleSlider = () => {
    const { 
        modelScale, setModelScale, resetModelScale
    } = useArtPiece()

	const handleRotationChange = (event) => {
		const value = parseFloat(event.target.value);
		setModelScale(value);
	};

	return (
		<div className="slider-container">
			<button onClick={resetModelScale} className="reset-button">
				<img src= "img/svg/reset.svg" alt="Toggle Icon" className="button-icon small-icon" />
			</button>
			<input
                className="slider"
				type="range"
				min="0.1"
				max="3"
				step="0.01"
				value={modelScale}
				onChange={handleRotationChange}
			/>
		</div>
	);
};

export default ScaleSlider;