import { Canvas } from '@react-three/fiber/'
import { Suspense, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Logo, { Lights } from 'components/three-assets/Logo'
import { useTranslation } from 'react-i18next'
import './Tech.scss'
import { pages as technologies } from 'components/three-assets/logos'
import useAccentColor from 'utils/hooks/useAccentColors'
import XpLevel from 'components/three-assets/tech/XpLevel'
import HTMLContent from 'components/three-assets/tech/HTMLContent'

export const Tech = () => {
  const { t } = useTranslation()

  const changeColors = useAccentColor(technologies(t)[0].bgColor)

  useEffect(() => {
    changeColors()
  })

  return (
    <>
      {technologies(t).map(
        (
          { logo, title, level = 5, time = 1, description, bgColor = '#000' },
          idx
        ) => (
          <TechStack
            key={idx}
            isEven={idx % 2 === 0}
            logo={logo}
            title={title}
            level={level}
            time={time}
            description={description}
            bgColor={bgColor}
          />
        )
      )}
    </>
  )
}

const TechStack = ({
  cameraPosition = [0, 0, 20],
  isEven,
  logo,
  title,
  level = 5,
  time = 1,
  description,
  bgColor = '#000'
}) => {
  const [refItem, inView] = useInView({
    threshold: 0.5
  })

  const changeColors = useAccentColor(bgColor)

  useEffect(() => {
    inView && changeColors()
  }, [inView])

  return (
    <div ref={refItem} style={{ height: '100vh' }}>
      <Suspense fallback={<span>Loading....</span>}>
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ position: cameraPosition, fov: 60 }}
        >
          {inView && (
            <>
              <Logo logo={logo} />
              <Lights />
            </>
          )}
          <XpLevel level={level} time={time} bgColor={bgColor} />
          <HTMLContent
            isEven={isEven}
            title={title}
            description={description}
            color={bgColor}
          />
        </Canvas>
      </Suspense>
    </div>
  )
}
