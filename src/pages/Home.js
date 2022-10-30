import { Html } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Stars from 'components/three-assets/Stars'
import { createRef, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import Rocket from '../components/three-assets/Rocket'
import './Home.scss'

const state = {
  sections: 1,
  pages: 1,
  zoom: 1,
  top: createRef()
}

export const Home = () => {
  const cameraPosition = [0, 0, 25 / 2]

  const { t } = useTranslation()

  return (
    <div style={{ height: '100vh' }}>
      <Canvas shadows camera={{ position: cameraPosition, fov: 70 }}>
        <Suspense fallback={null}>
          <Rocket />
          <Stars />
          <HTMLContent state={state} bgColor={'black'}>
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
