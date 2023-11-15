import { MeshWobbleMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";

const TorusKnot = ({ position, args, color }) => {
  const torusRef = useRef();
  useFrame((state, delta) => {
    // torusRef.current.rotation.x += hovered ? delta + 0.2 : delta;
    // torusRef.current.rotation.y += hovered ? delta + 0.2 : delta;
    // torusRef.current.position.z = Math.sin(state.clock.elapsedTime) * 3;
  });

  const [hovered, setHovered] = useState(false);

  return (
    <>
      <mesh
        position={position}
        ref={torusRef}
        onPointerEnter={(e) => (e.stopPropagation(), setHovered(true))}
        onPointerLeave={(e) => (e.stopPropagation(), setHovered(false))}
      >
        <torusKnotGeometry args={args} />
        {/* <meshStandardMaterial color={color} wireframe /> */}
        <MeshWobbleMaterial color={color} wireframe />
      </mesh>
    </>
  );
};

export default TorusKnot;
