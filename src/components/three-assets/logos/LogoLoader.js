import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import lerp from 'lerp'
import { useRef, useEffect } from 'react'
const LogoLoader = ({
  uri,
  position = [0, 0, 1.5],
  animate = (meshRef, frame) => {
    meshRef.current.rotation.z =
      Math.sin(frame.clock.getElapsedTime() * 1) * Math.PI * 0.125
    meshRef.current.rotation.x = lerp(
      meshRef.current.rotation.x,
      -Math.PI * 1.5 + Math.sin(frame.pointer.y - 0.5) * Math.PI * 0.125,
      0.05
    )
  },
  children,
  ...props
}) => {
  const { scene } = useGLTF(uri)

  const ref = useRef()

  useFrame((frame) => {
    animate(ref, frame)
  })

  useEffect(() => {
    if (scene) {
      scene.traverse((node) => {
        if (node.isMesh) {
          node.castShadow = true
        }
      })
    }
  })

  return (
    <mesh
      ref={ref}
      rotation={props.rotation ?? [Math.PI / 2, 0, 0]}
      position={position}
      {...props}
    >
      {children}
      <primitive object={scene} />
    </mesh>
  )
}

export default LogoLoader
