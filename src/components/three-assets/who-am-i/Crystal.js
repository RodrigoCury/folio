import { useGLTF } from '@react-three/drei'
import useDebugControls from '../../../utils/hooks/useDebugControls'

const Crystal = ({ ...props }) => {
  const {
    nodes: { Plane: Crystal }
  } = useGLTF('/3d-models/abstract/crystal.glb')

  const materialprops = {
    thickness: 1,
    roughness: 0,
    clearcoat: 1,
    clearcoatRoughness: 0,
    transmission: 0.9,
    ior: 1.25,
    envMapIntensity: 25,
    color: '#FFFFFF',
    attenuationTint: '#000000',
    attenuationDistance: 1,
    metalness: 0.5
  }

  const [crystalProps] = useDebugControls([materialprops])

  return (
    <group {...props} position={[0, 0, 0]} scale={[1, 1, 1]}>
      <mesh
        geometry={Crystal.geometry}
        position={[0, -25, 10]}
        // scale={[0.35, 0.35, 1]}
        rotation={[Math.PI / 2, 0, 0]}
        {...props}
      >
        <meshPhysicalMaterial {...crystalProps} />
      </mesh>
    </group>
  )
}

export default Crystal
