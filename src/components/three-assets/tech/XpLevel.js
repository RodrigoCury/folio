import useInterval from 'utils/hooks/useInterval'

import { a, useSprings } from '@react-spring/three'
import { Text } from '@react-three/drei'

const XpLevel = ({ level, bgColor }) => {
  const newLevel = level + 1

  const howGood = Array.apply(null, Array(newLevel)).map(() => {})

  const base = (-newLevel * 1.2) / 2

  let hidden = false

  const [animation, setopc] = useSprings(newLevel, (n) => ({
    to: {
      opacity: 1,
      position: [(base + n + 1) * 1.2, -10.5, 0]
    },
    from: {
      opacity: 0,
      position: [0, -(n + 15), 0]
    },
    config: { tension: 600, friction: 200 }
  }))

  useInterval(() => {
    hidden = !hidden
    setopc((n) => {
      const newState = {
        opacity: hidden ? 0.4 : 1,
        delay: n * 80
      }
      return newState
    })
  }, level * 400)

  return (
    <group>
      {howGood.map((_, idx) => {
        return !idx ? (
          <a.group key={idx} {...animation[0]}>
            <Text
              color={'white'}
              anchorX='center'
              anchorY='middle'
              fontSize={0.6}
            >
              XP
            </Text>
          </a.group>
        ) : (
          <a.mesh key={idx} {...animation[idx]}>
            <boxGeometry args={[1, 0.5, 0.2]} />
            <a.meshStandardMaterial
              opacity={animation[idx].opacity}
              transparent={true}
              color={bgColor}
              metalness={0.5}
              roughness={0.1}
            />
          </a.mesh>
        )
      })}
    </group>
  )
}

export default XpLevel
