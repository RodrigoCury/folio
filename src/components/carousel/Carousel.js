import { Suspense, useEffect, useState } from 'react'
import { useDimensions } from '../../utils/hooks/useDimensions'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas } from '@react-three/fiber/'
import { useInView } from 'react-intersection-observer'
import Logo, { Lights } from '../three-assets/Logo'
import useAccentColor from '../../utils/hooks/useAccentColors'
import XpLevel from '../three-assets/tech/XpLevel'
import HTMLContent from '../three-assets/tech/HTMLContent'
import { useTranslation } from 'react-i18next'

const Carousel = ({ techs }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [touchStartY, setTouchStartY] = useState(0)
  const [blockMove, setBlockMove] = useState(false)
  
  const dimensions = useDimensions()

  const turnPage = (page) => {
    const maxPage = techs.length

    let nextPage
    if (page < 0) {
      nextPage = techs.length - 1
    } else if (page >= maxPage) {
      nextPage = 0
    } else {
      nextPage = page
    }

    setCurrentPage(nextPage)
  }

  const onTouchStart = ({ touches : [{ screenY }]}) => {
    setTouchStartY(screenY)
  }

  const onTouchMove = ({ touches : [{ screenY }]}) => {
    if (blockMove) return

    if (touchStartY < screenY) {
      setBlockMove(true)
      setTouchStartY(screenY)
      turnPage(currentPage - 1)
    } else if (touchStartY > screenY) {
      setBlockMove(true)
      setTouchStartY(screenY)
      turnPage(currentPage + 1)
    }
  }

  const onTouchEnd = () => {
    setTouchStartY(0)
    setBlockMove(false)
  }

  return (
    <motion.div
      style={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden'
      }}
    >
      {/* <Suspense> */}
      <motion.div
        animate={{
          y: dimensions.height ? -dimensions.height * currentPage : 0
        }}
        onWheel={({ deltaY, deltaX }) => {
          turnPage(currentPage + (deltaY > 0 || deltaX > 0 ? 1 : -1))
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
        onAnimationComplete={() => { setBlockMove(false) }}
        transition={{
          type: 'spring',
          stiffness: 60,
          restDelta: 2
        }}
      >
        <AnimatePresence>
          {techs.map((tech, idx) => {
            return (
              <TechStack
                key={idx}
                isEven={idx % 2 === 0}
                tech={tech}
                isCurrent={idx === currentPage}
              />
            )
          })}
        </AnimatePresence>
      </motion.div>
      <motion.div
        style={{
          position: 'fixed',
          bottom: 'calc(100vh - 50%)',
          right: '16px',
          transform: 'translateY(50%)',
          display: 'flex',
          borderSize: '1px',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: '#00000077',
          borderRadius: 30,
          zIndex: 99999999,
          padding: '8px 6px'
        }}
      >
        {techs.map((_, idx) => {
          return (
            <PageSelector
              key={idx}
              selected={idx === currentPage}
              onClick={() => turnPage(idx)}
            />
          )
        })}
      </motion.div>
      {/* </Suspense> */}
    </motion.div>
  )
}

export const TechStack = ({ tech, isEven, isCurrent }) => {
  const {
    cameraPosition = [0, 0, 20],
    logo,
    title,
    level = 5,
    time = 1,
    description,
    bgColor = '#000'
  } = tech

  const { i18n: {resolvedLanguage} } = useTranslation()

  const [refItem, inView] = useInView({
    threshold: 0.5
  })
  const changeColors = useAccentColor(bgColor, bgColor)

  useEffect(() => {
    inView && changeColors()
  }, [inView])

  useEffect(() => {
    changeColors()
  }, [resolvedLanguage])

  return (
    <motion.div
      ref={refItem}
      style={{ height: '100vh', width: '100vw' }}
      animate={{ opacity: isCurrent ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <Suspense>
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ position: cameraPosition, fov: 60 }}
        >
          {inView && (
            <>
              <Logo logo={logo} />
              <Lights />
              <XpLevel level={level} time={time} bgColor={bgColor} />
            </>
          )}
          <HTMLContent
            isEven={isEven}
            title={title}
            description={description}
            color={bgColor}
          />
        </Canvas>
      </Suspense>
    </motion.div>
  )
}

const PageSelector = ({ selected = false, ...props }) => {
  const variants = {
    selected: {
      border: 'solid',
      borderColor: '#FFFFFF',
      borderRadius: '32px',
      scale: 1.1
    },
    unselected: {
      border: 'solid',
      borderColor: '#FFFFFF00',
      borderRadius: '8px',
      scale: 1.0,
      transition: { duration: 1 }
    }
  }

  const inVariants = {
    selected: {
      backgroundColor: '#FFFFFFAA'
    },
    unselected: {
      backgroundColor: '#FFFFFF55'
    }
  }

  return (
    <motion.div
      initial='unselected'
      animate={selected ? 'selected' : 'unselected'}
      variants={variants}
      transition={{ duration: 0.75 }}
      style={{
        display: 'flex',
        borderSize: '1px',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        height: '24px',
        width: '24px',
        margin: '4px 0'
      }}
      {...props}
    >
      <motion.div
        style={{
          borderRadius: '8px',
          height: '16px',
          width: '16px',
          transition: 1
        }}
        initial='unselected'
        animate={selected ? 'selected' : 'unselected'}
        variants={inVariants}
      />
    </motion.div>
  )
}

export default Carousel
