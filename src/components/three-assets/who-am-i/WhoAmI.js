import { Image, useIntersect } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { damp } from 'three/src/math/MathUtils'
import KeyCaps from './KeyCap'
import Crystal from './Crystal'
import useMediaQuery from '../../../utils/hooks/useMediaQuery'
import { Vector3 } from 'three'

const vec = new Vector3()

const WhoAmI = ({ currentPage }) => {
  const group = useRef()
  const directionalLightRef = useRef()
  const directionalLightRef2 = useRef()

  useFrame(({ mouse: { y, x } }) => {
    if (directionalLightRef.current) {
      directionalLightRef.current.position.y = 2 - y * 0.5
      directionalLightRef.current.position.x = 2 - x * 0.5
    }
    if (directionalLightRef2.current) {
      directionalLightRef2.current.position.y = 2 - y * 0.5
      directionalLightRef2.current.position.x = 2 - x * 0.5
    }
  })

  useFrame((_, delta) => {
    const [x, y, z] = pagePosition(currentPage)
    group.current.position.lerp(vec.set(x, y, z), delta * 2)
  })

  useEffect(() => {
    console.log(group.current)
  }, [group.current])

  return (
    <group ref={group}>
      <Items />
      <directionalLight
        ref={directionalLightRef2}
        position={[-1, 0, 10]}
        intensity={0.25}
      />
      <directionalLight
        ref={directionalLightRef}
        position={[0, 0, 2]}
        intensity={0.25}
      />
      <ambientLight intensity={0.25} />
    </group>
  )
}
function Items() {
  const { width: w, height: h } = useThree((state) => state.viewport)

  const isSmall = useMediaQuery('(max-width: 1200px)')

  return (
    <>
      <Crystal />
      <KeyCaps />
      <Item
        url={'/imgs/cury.jpeg'}
        scale={isSmall ? [w / 2.5, w / 2, 1] : [w / 4.5, w / 3, 1]}
        position={[-w / 6, -h * 0.8, 0]}
      />
      <Item
        url={'/imgs/bras.jpg'}
        scale={isSmall ? [w / 2.5, w / 2, 1] : [w / 4.5, w / 3, 1]}
        position={[w / 6, -h * 1.575, 0]}
      />
      <Item
        url={'/imgs/privacy.jpeg'}
        scale={isSmall ? [w / 2, w / 2.5, 1] : [w / 3, w / 4.5, 1]}
        position={[-w / 4.5, -h * 2.25, 0]}
      />
    </>
  )
}

function Item({ url, scale, ...props }) {
  const visible = useRef(false)
  const [hovered, hover] = useState(false)
  const ref = useIntersect((isVisible) => (visible.current = isVisible))
  const { height } = useThree((state) => state.viewport)

  useFrame((_, delta) => {
    ref.current.position.y = damp(
      ref.current.position.y,
      visible.current ? 0 : -height / 2 + 1,
      4,
      delta
    )
    ref.current.material.zoom = damp(
      ref.current.material.zoom,
      visible.current ? 1 : 1.5,
      4,
      delta
    )
    ref.current.material.grayscale = damp(
      ref.current.material.grayscale,
      hovered ? 0 : 1,
      4,
      delta
    )
  })

  return (
    <group {...props}>
      <Image
        ref={ref}
        onPointerUp={() => hover((isHovering) => !isHovering)}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
        scale={scale}
        url={url}
      />
    </group>
  )
}

const pagePosition = (page) => {
  if (page === 0) return [0, 0, 0]
  else if (page === 1) return [0, 13, 0]
  else if (page === 2) return [0, 26, 0]
  else if (page === 3) return [0, 39, 0]
  else return [0, 0, 0]
}

export default WhoAmI
