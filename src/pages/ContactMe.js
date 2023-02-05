import { Canvas } from '@react-three/fiber'
import Planes from 'components/three-assets/exp/Planes.js'
import { Suspense, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import useAccentColor from 'utils/hooks/useAccentColors'
import { OrbitControls, Sky, Html } from '@react-three/drei'
import ShakyRig from 'utils/camera/ShakyRig'
import { useRef } from 'react'
import useDebugControls from 'utils/hooks/useDebugControls'
import Clouds from 'components/three-assets/exp/Cloud'
import ContactMeForm from 'components/forms/ContactMeForm'

export const ContactMe = () => {
  const cameraPosition = [0, 40, 40 / 2]

  const [refItem, inView] = useInView({
    threshold: 0
  })

  const sky = useRef()

  const changeAccentColor = useAccentColor('#FFFFFF', '#189AB4')

  const [skyProps] = useDebugControls([skyProp])

  useEffect(() => {
    inView && changeAccentColor()
  }, [inView])

  return (
    <div ref={refItem} style={{ height: '100vh' }}>
      <Suspense fallback={<div>...loading</div>}>
        <Canvas shadows camera={{ position: cameraPosition, fov: 70 }}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
          <Sky ref={sky} {...skyProps} />
          <Html fullscreen as='div' className={''}>
            <ContactMeForm />
          </Html>
          <ShakyRig>
            <directionalLight castShadow={true} intensity={10} />
            <Clouds />
            <ambientLight intensity={0.3} />
            <Planes />
          </ShakyRig>
        </Canvas>
      </Suspense>
    </div>
  )
}

const skyProp = {
  inclination: 1,
  azimuth: 0.14,
  distance: 1000,
  mieCoefficient: 0.005,
  mieDirectionalG: 0.1,
  rayleigh: 0.1,
  turbidity: 1.7,
  exposure: 1
}
