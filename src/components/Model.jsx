import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import useArtPiece from "../store/artPieceStore";

export default function Model(props) {
    const group = useRef();

    const { 
        isPresentingAR, 
        modelRotation,
        modelScale,
        modelHeight
    } = useArtPiece()

    const { selectedArtpiece } = useArtPiece()

    const gltf = useGLTF(selectedArtpiece.assetAdress);

    return (
        <group ref={group} {...props} dispose={null}>
            <group 
                position={isPresentingAR ? [ 0, modelHeight, 0 ] : [0, 0, 0]} 
                rotation={[ 0, (Math.PI * modelRotation ), 0 ]}
                scale={modelScale}
            >
                <primitive object={gltf.scenes[0]} />
            </group>
        </group>
    );
}

useGLTF.preload("/models/chat_blanc.gltf");
useGLTF.preload("/models/fallen_angel.gltf");
useGLTF.preload("/models/jardin.gltf");
useGLTF.preload("/models/ombrelle.gltf");
