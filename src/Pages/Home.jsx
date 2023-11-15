import { CameraControls, Loader, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import TorusKnot from "../components/TorusKnot";
import { Link } from "react-router-dom";
import "./Home.css";
import Sun from "../components/Sun";

const Home = () => {
  return (
    <>
      <Canvas>
        <directionalLight position={[0, 0, 3]} intensity={3} />
        {/* <color attach={background} args={["red"]} /> */}
        <ambientLight intensity={0.5} />
        <OrbitControls />
        <Suspense>
          <Sun />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default Home;
