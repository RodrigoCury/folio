import { useGLTF, useIntersect } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { damp } from 'three/src/math/MathUtils'

const radius = 5
const pitch = 2

const randomRotation = () => {
  return [Math.PI / 2 + (Math.random() - 0.5) * 0.5, 0, Math.random() - 0.5]
}

const Instance = ({ letter, children, index, ...props }) => {
  // Not zero index
  const currentValue = index + 1

  // GLTF Model for letters
  const { nodes, materials } = useGLTF(`/3d-models/keycaps/${letter}.glb`)

  // Key Cap Data
  const keyCapMesh = nodes[`${letter}_1`]
  const keyCapMaterial = materials['Key Cap']

  // Letter Data
  const letterMesh = nodes[`${letter}_2`]
  const letterMaterial = materials['Letter']

  useEffect(() => {
    keyCapMaterial.color = { isColor: true, r: 10, g: 10, b: 10 }
    letterMaterial.color = { isColor: true, r: 0, g: 0, b: 0 }
  }, [letterMaterial])

  // Animations
  const visible = useRef(false)
  const ref = useIntersect((isVisible) => (visible.current = isVisible))
  const { height: h, aspect } = useThree((state) => state.viewport)

  useFrame(({ clock: { elapsedTime } }, delta) => {
    ref.current.position.y = damp(
      ref.current.position.y,
      22.5 - h - pitch * currentValue,
      4,
      delta
    )
    ref.current.rotation.y = damp(
      ref.current.rotation.y,
      Math.PI / 4 + (Math.cos(index + elapsedTime / 2) - 0.5) * 0.25,
      4,
      delta
    )
  })

  // default position calculation Helix on y axis
  const position = [
    Math.random() - 0.5 + radius * aspect * 0.5 * Math.cos(currentValue),
    22.5 - h - pitch * currentValue,
    -(radius / 2) * Math.sin(currentValue)
  ]

  return (
    <group ref={ref} rotation={randomRotation()} position={position} {...props}>
      <mesh
        receiveShadow
        castShadow
        geometry={keyCapMesh.geometry}
        material={keyCapMaterial}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={letterMesh.geometry}
        material={letterMaterial}
      />
      {children}
    </group>
  )
}

const letters = ['I', 'F', 'Enter', 'F', 'O', 'R', 'Enter']

export default function KeyCaps({ ...props }) {
  const [searchParams] = useSearchParams()
  return (
    <group {...props} scale={[2, 2, 2]}>
      {[...letters, ...letters, ...letters].map((letter, index) => {
        return (
          <Instance letter={letter} key={index} index={index}>
            {searchParams.has('debug') && <axesHelper args={[0.5]} />}
          </Instance>
        )
      })}
    </group>
  )
}
