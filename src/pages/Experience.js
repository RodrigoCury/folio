import { Canvas } from '@react-three/fiber'
import WhoAmI from '../components/three-assets/who-am-i/WhoAmI'
import { Suspense, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import useAccentColor from '../utils/hooks/useAccentColors'
import './Experience.scss'
import ExperiencePages from '../components/three-assets/who-am-i/Experience'

export const Experience = () => {
  const [cameraPosition] = useState([0, 0, 25 / 2])

  const [currentPage, setCurrentPage] = useState(0)

  const [refItem, inView] = useInView({
    threshold: 0
  })

  const changeAccentColor = useAccentColor('#FFFFFF')

  useEffect(() => {
    inView && changeAccentColor()
  }, [inView])

  const onPageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <div ref={refItem} style={{ height: '100vh' }}>
      <Suspense fallback={<div>...loading</div>}>
        <div
          style={{
            top: 0,
            left: 0,
            position: 'absolute',
            width: '100vw',
            height: '100vh'
          }}
        >
          <Canvas shadows camera={{ position: cameraPosition, fov: 70 }}>
            <WhoAmI currentPage={currentPage}/>
          </Canvas>
        </div>
        <ExperiencePages pageChangeCallback={onPageChange} />
        
      </Suspense>
    </div>
  )
}
