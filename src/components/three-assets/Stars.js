import { Sparkles } from '@react-three/drei'

const Stars = () => {
  const scale = Array.from({ length: 300 }, () => 0.5 + Math.random())

  return (
    <Sparkles
      count={scale.length}
      size={scale}
      position={[0, 0.9, 0]}
      scale={[20, 20, 20]}
      speed={0.02}
    />
  )
}

export default Stars
