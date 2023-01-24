import { useGLTF, QuadraticBezierLine } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Plane } from '../../../../node_modules/drei/shapes'
import { useState } from 'react'
import { Vector3 } from 'three'
import { useEffect } from 'react'

const noise = [
  Math.random(),
  Math.random(),
  Math.random(),
]

const start1 = new Vector3(-15, 1, 0)
const start2 = new Vector3(-15, 0, 0)
const start3 = new Vector3(-15, -1, 0)

const Planes = () => {
  const {
    nodes: { Regular_Plane }
  } = useGLTF(`/3d-models/plane-1.glb`)
  const {
    nodes: { Plane_With_Raised_Wings }
  } = useGLTF(`/3d-models/plane-2.glb`)
  const {
    nodes: { Long_Narrow_Plane }
  } = useGLTF(`/3d-models/plane-3.glb`)

  const plane1 = useRef()
  const plane2 = useRef()
  const plane3 = useRef()
  const planeLine1 = useRef()
  const planeLine2 = useRef()
  const planeLine3 = useRef()

  const [mousePos, setMousePos] = useState(new Vector3())

  useFrame(
    ({ clock: { elapsedTime }}) => {
      const planes = [plane1, plane2, plane3]
      const planeLines = [planeLine1, planeLine2, planeLine3]
      planes.forEach(({ current }, index) => {
        current.position.y = Math.cos(-((Math.PI / 2) * index * noise[index]) + elapsedTime)
        current.lookAt(mousePos.x, mousePos.y * noise[index] * 2, mousePos.z)
        if (planeLines[index].current) {
          planeLines[index].current.position.y = current.position.y
        }
      })
    }
  )

  useEffect(() => {
    const planes = [plane1, plane2, plane3]

    planes.forEach(({ current }) => {
      current.castShadow = true
      current.receiveShadow = true
      current.lookAt(0, 0, 200)
    })
  }, [plane1, plane2, plane3])
  

  return (
    <>
      <group>
      <Cable
          start={start1}
          end={plane1}
        />
        <mesh
          geometry={Regular_Plane.geometry}
          ref={plane1}
          plane={1}
          scale={[1, 1, 1]}
          position={[0, 0, 1]}
        >
          <meshStandardMaterial color='#FFF' />
        </mesh>
        <Cable
          start={start2}
          end={plane2}
        />
        <mesh
          geometry={Plane_With_Raised_Wings.geometry}
          ref={plane2}
          plane={2}
          scale={[1, 1, 1]}
          position={[0, 0, 0]}
        >
          <meshStandardMaterial color='#FFF' />
        </mesh>
        <Cable
          start={start3}
          end={plane3}
        />
        <mesh
          geometry={Long_Narrow_Plane.geometry}
          ref={plane3}
          plane={3}
          scale={[1, 1, 1]}
          position={[0, 0, -1]}
        >
          <meshStandardMaterial color='#FFF' />
        </mesh>
      </group>
      <Plane
        args={[40, 40]}
        position={[0, 0, -3]}
        onPointerMove={({ point }) =>
          setMousePos({ x: point.x, y: - point.x * 12.5, z: 200 })
        }
      >
        <meshPhongMaterial color='#000000' opacity={0.01} transparent />
      </Plane>
    </>
  )
}
preload()

export default Planes

function Cable({ start, end, v2 = new Vector3() }) {
  const ref = useRef()
  useFrame(() => {
    const endPosition = end.current.getWorldPosition(v2)
    const startPos = new Vector3(start.x, -endPosition.y, start.z)
    const startPosition = new Vector3(start.x * 2, -endPosition.y * 2, start.z * 2)
    const midPosition = new Vector3(
      (startPos.x + endPosition.x) /2, 
      (startPos.y + endPosition.y) /2, 
      (startPos.z + endPosition.z) /2
    )
    ref.current.setPoints(startPosition, endPosition, midPosition)
  }, [])
  return <QuadraticBezierLine ref={ref} lineWidth={3} dashed={true} color="#FFF" />
}

function preload() {
  const planes = [1, 2, 3]
  planes.forEach((n) => {
    useGLTF.preload(`/3d-models/plane-${n}.glb`)
  })
}
