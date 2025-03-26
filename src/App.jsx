import { Canvas } from "@react-three/fiber";
import { XR, ARButton } from "@react-three/xr";
import XrHitModel from "./components/XrHitModel";
import Overlay from "./components/Overlay/Overlay";
import useArtPiece from "./store/artPieceStore";
import { useEffect } from "react";
import { startSession } from "@react-three/xr";
import CustomARButton from "./components/CustomARButton";

function App() {

	const { 
        isPresentingAR,
		selectRandomArtpiece,
    } = useArtPiece()

	useEffect(()=> {
		selectRandomArtpiece()
	}, [])

	return (
		<>
			{!isPresentingAR && (
				<div>
					<div className="logo-top">
						<img src="img/Logo_White.png" alt="Toggle Icon" className="logo-img" />
					</div>
					<CustomARButton />
					<div className="button-bottom">
						<div className="button-random">
							<button onClick={selectRandomArtpiece} className="round-button toggle-button small-button">
								<img src="img/svg/random.svg" alt="Toggle Icon" className="button-icon" />
							</button>
						</div>
					</div>
				</div>
			)}
			<Canvas>
				<XR>
					<pointLight position={[0,-3,2]}></pointLight>
					<XrHitModel />
				</XR>
			</Canvas>
			{isPresentingAR && (
				<Overlay />
			)}
		</>
	);
}

export default App;
