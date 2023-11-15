import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import React, { useRef } from "react";

const Sun = () => {
  const model = useGLTF("./venus/scene.gltf");
  const sunRef = useRef();
  useFrame((state, delta) => {
    sunRef.current.rotation.y += delta / 2.4;
  });
  return (
    <mesh ref={sunRef} position={[6, 0, 0]}>
      <primitive object={model.scene} />
    </mesh>
  );
};

export default Sun;
