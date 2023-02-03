import { useRef } from 'react'
import { Vector3 } from 'three'
import { useFrame, useThree } from '@react-three/fiber'

function ShakyRig({ children }) {
  const ref = useRef()
  const vec = new Vector3()
  const { camera, mouse } = useThree()
  useFrame(() => {
    const x = (mouse.x - 0.5) * 3
    const y = 1.25 + mouse.y
    const z = 4.5 + (1 - Math.abs(mouse.x))

    camera.position.lerp(
      vec.set(x, y, z),
      0.05
    )
  })
  return (
    <group ref={ref}>
      {children}
      {/* <axesHelper args={[2, 2]} /> */}
    </group>
  )
}

export default ShakyRig
