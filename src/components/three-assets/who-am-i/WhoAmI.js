import { Image, Scroll, ScrollControls, useIntersect } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { Suspense, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { damp } from 'three/src/math/MathUtils'
import KeyCaps from './KeyCap'
import Crystal from './Crystal'
import useMediaQuery from 'utils/hooks/useMediaQuery'

const WhoAmI = () => {
  const directionalLightRef = useRef()
  const directionalLightRef2 = useRef()

  useFrame(({ mouse: { y } }) => {
    if (directionalLightRef.current) {
      directionalLightRef.current.position.y = 2 + y * 0.5
    }
    if (directionalLightRef2.current) {
      directionalLightRef2.current.position.y = 2 + y * 0.5
    }
  })

  const { t } = useTranslation()

  return (
    <Suspense>
      <ScrollControls damping={10} pages={4}>
        <Items />
        <directionalLight
          ref={directionalLightRef2}
          position={[-1, 0, 10]}
          intensity={0.5}
        />
        <directionalLight
          ref={directionalLightRef}
          position={[0, 0, 2]}
          intensity={0.25}
        />
        <Scroll html style={{ width: '100%' }}>
          <h1 className='who_am_i heading'>
            {t('name.first')}
            <br />
            {t('name.last')}
          </h1>
          <h1 className='who_am_i subtext_1'>{t('who-am-i.1')}</h1>
          <h1
            className='who_am_i subtext_2'
            dangerouslySetInnerHTML={{
              __html: t('who-am-i.2', { interpolation: { escapeValue: false } })
            }}
          />
          <h1 className='who_am_i subtext_3'>{t('who-am-i.3')}</h1>
          <h1 className='who_am_i subtext_4'>
            Quando não estou programando gosto de viajar, ler, estudar, beatbox,
            fazer animações 3D.
          </h1>
        </Scroll>
      </ScrollControls>
    </Suspense>
  )
}
function Items() {
  const { width: w, height: h } = useThree((state) => state.viewport)

  const isSmall = useMediaQuery('(max-width: 1200px)')

  return (
    <Scroll>
      <Crystal />
      <KeyCaps />
      <Item
        url={'/imgs/cury.jpeg'}
        scale={isSmall ? [w / 2.5, w / 2, 1] : [w / 4.5, w / 3, 1]}
        position={[-w / 6, -h * 0.8, 0]}
      />
      <Item
        url={'/imgs/waterfall.jpg'}
        scale={isSmall ? [w / 2.5, w / 2, 1] : [w / 4.5, w / 3, 1]}
        position={[w / 6, -h * 1.575, 0]}
      />
      <Item
        url={'/imgs/bras.jpg'}
        scale={isSmall ? [w / 2.5, w / 2, 1] : [w / 4.5, w / 3, 1]}
        position={[-w / 6, -h * 2.25, 0]}
      />
      <Item
        url={'/imgs/ranch.jpeg'}
        scale={isSmall ? [w / 2.5, w / 2, 1] : [w / 4.5, w / 3, 1]}
        position={[w / 6, -h * 2.95, 0]}
      />
    </Scroll>
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

export default WhoAmI
