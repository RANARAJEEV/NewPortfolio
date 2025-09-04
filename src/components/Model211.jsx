import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import  Model21 from "./Model21"; // named import from Model21.jsx

export default function Model211() {
  return (
    <div className="w-full h-full bg-gray-900">
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 50 }} // camera faces the model center
        className="w-full h-full"
      >
        {/* Lighting */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Centered Model */}
        <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
          <Model21 scale={1.5} />
        </group>

        {/* Orbit Controls */}
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          autoRotate
          autoRotateSpeed={3}
        />
      </Canvas>
    </div>
  );
}
