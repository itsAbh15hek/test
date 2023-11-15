import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Sphere = ({ position, args, color }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.position.x = position[0] + state.pointer.x;
    ref.current.position.y = position[1] + state.pointer.y;
    ref.current.rotation.z = state.pointer.x + state.pointer.y;
  });
  return (
    <>
      <mesh ref={ref} position={position}>
        <sphereGeometry args={args} />
        <meshStandardMaterial color={color} wireframe />
      </mesh>
    </>
  );
};

export default Sphere;
