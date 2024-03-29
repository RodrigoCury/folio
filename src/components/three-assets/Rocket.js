import { useGLTF, useHelper } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Suspense, useEffect, useRef } from 'react'
import lerp from 'lerp'
import { AxesHelper } from 'three'
const scale = 3

const Rocket = (props) => {
  const {
    nodes: { planet001 }
  } = useGLTF('/rocket.glb')

  const ref = useRef()

  useEffect(() => {
    if (planet001 && planet001.isMesh) {
      planet001.castShadow = true
      planet001.receiveShadow = true
    }
  }, [planet001])

  useHelper(ref, AxesHelper, 10)
  useFrame(({ clock }) => {
    ref.current.rotation.y = Math.PI * clock.getElapsedTime() * 0.025
  })

  return (
    <Suspense>
      <group {...props} scale={[1, 1, 1]} position={[0, -1.25, 0]}>
        <mesh
          ref={ref}
          castShadow
          receiveShadow
          geometry={planet001.geometry}
          scale={[scale, scale, scale]}
        >
          <meshStandardMaterial roughness={0.9} metalness={1} color='#AAA' />
        </mesh>
        <Lights />
      </group>
    </Suspense>
  )
}

const Lights = () => {
  const groupL = useRef()
  const groupR = useRef()
  useFrame(({ pointer: { x, y } }) => {
    const newPos = 0.33 * x * Math.PI
    groupL.current.rotation.y = lerp(
      groupL.current.rotation.y,
      newPos - Math.PI / 2,
      0.1
    )
    groupR.current.rotation.y = lerp(
      groupR.current.rotation.y,
      newPos - Math.PI * 1.5,
      0.1
    )
    groupL.current.position.y = lerp(groupL.current.position.y, -y * 2, 0.05)
    groupR.current.position.y = lerp(groupR.current.position.y, y * 2, 0.05)
  })

  return (
    <>
      <group ref={groupL}>
        <pointLight
          position={[0, -7, 15]}
          distance={15}
          intensity={5}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
      </group>
      <group ref={groupR}>
        <pointLight
          position={[0, -7, 15]}
          distance={15}
          intensity={5}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
      </group>
      <spotLight
        position={[0, 10, 0]}
        distance={15}
        intensity={1}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
    </>
  )
}

useGLTF.preload('/rocket.gltf')

export default Rocket
