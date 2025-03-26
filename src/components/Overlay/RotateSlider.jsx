import React from 'react';
import useArtPiece from '../../store/artPieceStore';

const RotateSlider = () => {
    const { 
        modelRotation, setModelRotation, resetModelRotation
    } = useArtPiece()

	const handleRotationChange = (event) => {
		const value = parseFloat(event.target.value);
		setModelRotation(value);
	};

	return (
		<div className="slider-container">
                <button onClick={resetModelRotation} className="reset-button">
					<img src= "img/svg/reset.svg" alt="Toggle Icon" className="button-icon small-icon" />
				</button>
				<input
                    className="slider"
					type="range"
					min="-1"
					max="1"
					step="0.01"
					value={modelRotation}
					onChange={handleRotationChange}
				/>
		</div>
	);
};

export default RotateSlider;