import { useRef } from 'react'
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'
export default function Model21(props) {
  // const { nodes, materials } = useGLTF("/model1.glb");
  const { nodes } = useGLTF('/model1.glb') // make sure model.glb is in public folder
    const ref = useRef()
  
    useFrame(({ mouse }) => {
      if (ref.current) {
        // Smooth rotation based on mouse
        ref.current.rotation.y += (mouse.x * 0.5 - ref.current.rotation.y) * 0.05
        ref.current.rotation.x += (mouse.y * 0.2 - ref.current.rotation.x) * 0.05
      }
    })
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </group>
  );
}

useGLTF.preload("/model1.glb");
