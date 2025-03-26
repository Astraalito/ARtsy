import React from 'react';
import useArtPiece from '../../store/artPieceStore';


const Description = () => {

    const { 
        isDescriptionVisible, setIsDescriptionVisible,
		selectedArtpiece,
    } = useArtPiece()

    return (
        <>
            <div className={`overlay ${isDescriptionVisible ? 'fadeIn' : 'fadeOut'}`}>
                <div className="text-container">
                    <div className="text-group">
                        <h1>{selectedArtpiece.titre}</h1>
                        <h2>{selectedArtpiece.auteur}</h2>
                        <h2>{selectedArtpiece.date}</h2>
                        <h2>{selectedArtpiece.lieu}</h2>
                        {selectedArtpiece.description.map( (paragraph, index) => {
                            return <p className='description' key={index}>{paragraph}</p>
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Description;