import { Canvas } from '@react-three/fiber'
import Planes from 'components/three-assets/exp/Planes.js'
import { Suspense, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import useAccentColor from 'utils/hooks/useAccentColors'
import { OrbitControls, Sky } from '@react-three/drei'

export const Experience = () => {

  const cameraPosition = [0, 0, 25 / 2]

  const [refItem, inView] = useInView({
    threshold: 0
  })

  const changeAccentColor = useAccentColor('#8DA8C4')

  useEffect(() => {
    inView && changeAccentColor()
  }, [inView])


  return <div ref={refItem} style={{ height: '100vh' }}>
  <Suspense fallback={<div>...loading</div>}>
    <Canvas shadows camera={{ position: cameraPosition, fov: 70 }} >
      <directionalLight intensity={10} />
      <ambientLight intensity={0.4} />
      <OrbitControls />
      <Planes />
      <Sky />
    </Canvas>
  </Suspense>
</div>
}
