import { softShadows, useHelper } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import { PlaneGeometry, SpotLightHelper } from 'three'

softShadows()

const Logo = ({ logo, position = [0, 0, 0], scale = 3, ...props }) => {
  PlaneGeometry

  return (
    <Suspense>
      <group {...props} scale={[scale, scale, scale]} position={position}>
        {logo}
        <ShadowPlane />
      </group>
    </Suspense>
  )
}

const ShadowPlane = ({ ...restProps }) => {
  const plane = useRef()

  return (
    <group position={[0, 0, -2]} {...restProps}>
      <mesh ref={plane} rotation={[0, 0, 0]} receiveShadow>
        <planeBufferGeometry attach='geometry' args={[30, 20]} />
        <shadowMaterial attach='material' transparent opacity={0.2} blur />
      </mesh>
    </group>
  )
}

export const Lights = ({ color = 'white' }) => {
  const camera = useRef()

  useHelper(camera, SpotLightHelper, 'white')

  return (
    <group>
      <fog attach='fog' args={['white', 0, 40]} />
      <spotLight
        castShadow
        position={[-2, 4, 20]}
        shadow-mapSize={[512 * 4, 512 * 4]}
        intensity={0.8}
      />

      <ambientLight color={color} intensity={0.05} />
    </group>
  )
}

export default Logo
