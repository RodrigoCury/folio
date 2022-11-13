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

useGLTF.preload([
  '/3d-models/Kt-logo.glb',
  '/3d-models/Java.glb',
  '/3d-models/rx.glb',
  '/3d-models/pyLogo.glb',
  '/3d-models/nodejs.glb',
  '/3d-models/spring.glb',
  '/3d-models/spring-reactive.glb',
  '/3d-models/docker.glb',
  '/3d-models/git.glb',
  '/3d-models/kafka.glb',
  '/3d-models/psql.glb',
  '/3d-models/mongo.glb',
  '/3d-models/redis.glb',
  '/3d-models/linux.glb',
  '/3d-models/react.glb',
  '/3d-models/three.glb',
  '/3d-models/html.glb',
  '/3d-models/css.glb',
  '/3d-models/jsLogo.glb',
  '/3d-models/aws-logo.glb',
  '/3d-models/localstack.glb',
  '/3d-models/aws-services.glb',
  '/3d-models/wpp.glb',
  '/3d-models/eMailLogo.glb',
  '/3d-models/githubLogo.glb',
  '/3d-models/bitb.glb',
  '/3d-models/lkdLogo.glb',
  '/3d-models/blender.glb'
])

export default LogoLoader
