import React from 'react';
import useArtPiece from '../../store/artPieceStore';

const HeightSlider = () => {
    const { 
        modelHeight, setModelHeight, resetModelHeight
    } = useArtPiece()

	const handleHeightChange = (event) => {
		const value = parseFloat(event.target.value);
		setModelHeight(value);
	};

	return (
		<div className="slider-container">
                <button onClick={resetModelHeight} className="reset-button">
					<img src= "img/svg/reset.svg" alt="Toggle Icon" className="button-icon small-icon" />
				</button>
				<input
                    className="slider"
					type="range"
					min="-2"
					max="3"
					step="0.01"
					value={modelHeight}
					onChange={handleHeightChange}
				/>
		</div>
	);
};

export default HeightSlider;