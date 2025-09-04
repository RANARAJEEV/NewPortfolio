import { Canvas } from '@react-three/fiber'
import { Model } from './Model.jsx'
import { OrbitControls } from '@react-three/drei'

export default function Model2() {
  return (
    <div className="flex items-center justify-center bg-gray-900 w-full h-full overflow-hidden">
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 50 }}
        className="w-full h-full"
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 10, 5]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        {/* 3D Model */}
        <Model position={[0, 0, 0]} />

        {/* Orbit Controls */}
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={4}/>
      </Canvas>
    </div>
  )
}
