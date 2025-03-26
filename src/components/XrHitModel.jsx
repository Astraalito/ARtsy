import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import { useRef, useState, useEffect } from "react";
import Model from "./Model";
import useArtPiece from "../store/artPieceStore";

const XrHitModel = () => {
    const reticleRef = useRef();
    const [models, setModels] = useState([]);

    const { isPresenting } = useXR();

    const { 
        setIsPresentingAR, 
        triggerPlaceModel, setTriggerPlaceModel,
        isModelVisible, setIsModelVisible,
        appState, setAppState
    } = useArtPiece();
    

    useEffect(() => {
		setIsPresentingAR(isPresenting);
	}, [isPresenting, setIsPresentingAR]);

    useEffect(() => {
		if (triggerPlaceModel) {
			placeModel();
			setTriggerPlaceModel(false); // Réinitialiser l'état après l'appel
		}
	}, [triggerPlaceModel, setTriggerPlaceModel]);

    useThree(({ camera }) => {
        if (!isPresenting) {
            camera.position.z = 3;
        }
    });

    useHitTest((hitMatrix, hit) => {
        hitMatrix.decompose(
            reticleRef.current.position,
            reticleRef.current.quaternion,
            reticleRef.current.scale
        );
        reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
    });

    const placeModel = (e) => {
        let position = reticleRef.current.position.clone()
        let id = Date.now()
        setIsModelVisible(true)
        setAppState("placed")
        setModels([{ position, id }]);
    };

    return (
        <>
            <OrbitControls />
            <ambientLight />
            {isPresenting && isModelVisible &&
                models.map(({ position, id }) => {
                    return <Model key={id} position={position} />;
                })}
            {isPresenting && (
                <Interactive onSelect={placeModel}>
                    <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
                        <ringGeometry args={[0.1, 0.25, 32]} />
                        <meshStandardMaterial 
                            color={"white"} 
                            transparent 
                            opacity={ (appState == "placing") ? "1" : "0"}
                        />
                    </mesh>
                </Interactive>
            )}

            {!isPresenting && <Model />}
        </>
    );
};

export default XrHitModel;
