// src/components/Model.jsx
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes } = useGLTF('/model.glb') // make sure model.glb is in public folder
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
  )
}

useGLTF.preload('/model.glb')
