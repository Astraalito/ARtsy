import { create } from 'zustand';
import artpieces from '../data/artPieces';

const useArtPiece = create((set, get) => ({
	isPresentingAR: false,
	setIsPresentingAR: (value) => set({ isPresentingAR: value }),

	isDescriptionVisible: false,
	setIsDescriptionVisible: (value) => set({ isDescriptionVisible: value }),

	triggerPlaceModel: false,
	setTriggerPlaceModel: (value) => set({ triggerPlaceModel: value }),

	selectedArtpiece: null,
	selectRandomArtpiece: () => {
		const randomIndex = Math.floor(Math.random() * artpieces.length);
		const selectedArtpiece = get().selectedArtpiece;

		if (!selectedArtpiece || artpieces[randomIndex].id !== selectedArtpiece?.id) {
			set({ selectedArtpiece: artpieces[randomIndex] });
		} else {
			get().selectRandomArtpiece();
		}
	},

	isModelVisible: false,
	setIsModelVisible: (value) => set({ isModelVisible: value }),

	appState: 'placing',
	setAppState: (newState) => set({ appState: newState }),

	modelRotation: 0,
	setModelRotation: (newRotation) => set({ modelRotation: newRotation}),
	resetModelRotation: () => set({ modelRotation: 0}),

	modelScale: 1,
	setModelScale: (newScale) => set ({ modelScale: newScale }),
	resetModelScale: () => set({ modelScale: 1}),

	modelHeight: 1,
	setModelHeight: (newHeight) => set({ modelHeight: newHeight}),
	resetModelHeight: () => set({ modelHeight: 1}),

}));

export default useArtPiece;