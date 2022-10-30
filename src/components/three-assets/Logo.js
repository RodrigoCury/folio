import { softShadows } from '@react-three/drei'
import { Suspense } from 'react'
import { PlaneGeometry } from 'three'

softShadows()

const Logo = ({ logo, position = [0, 0, 0], scale = 3, ...props }) => {
  PlaneGeometry

  return (
    <Suspense>
      <group {...props} scale={[scale, scale, scale]} position={position}>
        <Lights />
        {logo}
        <ShadowPlane />
      </group>
    </Suspense>
  )
}

const ShadowPlane = (restProps) => {
  return (
    <group position={[0, -1.5, 0]} {...restProps}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeBufferGeometry attach='geometry' args={[100, 100]} />
        <shadowMaterial attach='material' transparent opacity={0.5} />
      </mesh>
    </group>
  )
}

const Lights = ({ color = 'white' }) => {
  const w = 4
  return (
    <group>
      <directionalLight castShadow position={[0, 8, 10]} intensity={1}>
        <orthographicCamera attach='shadow-camera' args={[-w, w, w, -w]} />
      </directionalLight>
      <pointLight position={[-10, 0, -20]} color={color} intensity={1} />
      <pointLight position={[0, -10, 0]} intensity={1} />
    </group>
  )
}

export default Logo
