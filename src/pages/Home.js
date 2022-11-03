import { Html } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Stars from 'components/three-assets/Stars'
import { Suspense, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'
import useAccentColor from 'utils/hooks/useAccentColors'
import Rocket from '../components/three-assets/Rocket'
import './Home.scss'

export const Home = () => {
  const cameraPosition = [0, 0, 25 / 2]

  const { t } = useTranslation()

  const [refItem, inView] = useInView({
    threshold: 0
  })

  const changeAccentColor = useAccentColor()
  useEffect(() => {
    inView && changeAccentColor('#000000')
  }, [inView])

  return (
    <div ref={refItem} style={{ height: '100vh' }}>
      <Canvas shadows camera={{ position: cameraPosition, fov: 70 }}>
        <Suspense fallback={null}>
          <Rocket />
          <Stars />
          <HTMLContent bgColor={'black'}>
            <h1>{t('rodrigo.cury')}</h1>
            <h3>{t('desenvolvedor.backend.pleno')}</h3>
          </HTMLContent>
        </Suspense>
      </Canvas>
    </div>
  )
}

const HTMLContent = ({ domContent, children }) => {
  return (
    <group position={[0, 0, 0]}>
      <Html fullscreen portal={domContent} as='div' className='home-container'>
        <>{children}</>
      </Html>
    </group>
  )
}
