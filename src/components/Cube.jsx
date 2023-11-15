import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

function Cube({ position, size, color }) {
  const cubeRef = useRef();
  useFrame((state, delta) => {
    cubeRef.current.position.x = position[0] + state.pointer.x;
    cubeRef.current.position.y = position[1] + state.pointer.y;
    cubeRef.current.rotation.z = state.pointer.x + state.pointer.y;
  });

  return (
    <>
      <mesh ref={cubeRef} position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={color} />
      </mesh>
    </>
  );
}

export default Cube;
