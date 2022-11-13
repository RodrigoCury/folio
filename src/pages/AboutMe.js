import { Canvas } from '@react-three/fiber'
import WhoAmI from 'components/three-assets/who-am-i/WhoAmI'
import { Suspense, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import useAccentColor from 'utils/hooks/useAccentColors'
import './AboutMe.scss'

export const AboutMe = () => {
  const cameraPosition = [0, 0, 25 / 2]

  const [refItem, inView] = useInView({
    threshold: 0
  })

  const changeAccentColor = useAccentColor('#FFFFFF')

  useEffect(() => {
    inView && changeAccentColor()
  }, [inView])

  return (
    <div ref={refItem} style={{ height: '100vh' }}>
      <Suspense fallback={<div>...loading</div>}>
        <Canvas shadows camera={{ position: cameraPosition, fov: 70 }}>
          <WhoAmI />
        </Canvas>
      </Suspense>
    </div>
  )
}
