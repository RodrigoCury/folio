import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const ExperiencePages = ({ pageChangeCallback = () => {} }) => {
  const maxPage = 4

  const [currentPage, setCurrentPage] = useState(0)
  const [touchStartY, setTouchStartY] = useState(0)
  const [blockMove, setBlockMove] = useState(false)
  const { t } = useTranslation()

  const turnPage = (page) => {
    let nextPage
    if (page < 0) {
      nextPage = maxPage - 1
    } else if (page >= maxPage) {
      nextPage = 0
    } else {
      nextPage = page
    }

    setCurrentPage(nextPage)
  }

  const onTouchStart = ({ touches: [{ screenY }] }) => {
    console.log(screenY)
    setTouchStartY(screenY)
  }

  const onTouchMove = ({ touches: [{ screenY }] }) => {
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

  useEffect(() => {
    pageChangeCallback(currentPage)
  }, [currentPage, pageChangeCallback])

  const onTouchEnd = () => {
    setTouchStartY(0)
  }

  const animationEnd = () => {
    setBlockMove(false)
  }

  return (
    <div
      style={{ position: 'absolute', top: 0, left: 0, backgroundColor: '#FFFFFF01', ...containerStyle }}
      onWheel={({ deltaY, deltaX }) => {
        turnPage(currentPage + (deltaY > 0 || deltaX > 0 ? 1 : -1))
      }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onTouchCancel={onTouchEnd}
    >
      <motion.div
        style={{
          position: 'fixed',
          right: 'calc(100vw - 50%)',
          bottom: '16px',
          transform: 'translateX(50%)',
          display: 'flex',
          borderSize: '1px',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: '#00000077',
          borderRadius: 30,
          zIndex: 99999999,
          padding: '6px 8px '
        }}
      >
        {new Array(maxPage).fill(true).map((_, idx) => {
          return (
            <PageSelector
              key={idx}
              selected={idx === currentPage}
              onClick={() => turnPage(idx)}
            />
          )
        })}
      </motion.div>
      <motion.div style={wrapperStyle}>
        <motion.h1
          initial='shown'
          animate={currentPage == 0 ? 'shown' : 'hidden'}
          variants={variants[0]}
          onAnimationComplete={animationEnd}
          className='who_am_i heading'
        >
          {t('name.first')}
          <br />
          {t('name.last')}
        </motion.h1>
        <motion.h2
          initial='hidden'
          animate={currentPage == 1 ? 'shown' : 'hidden'}
          variants={variants[1]}
          className='who_am_i subtext_1'
          onAnimationComplete={animationEnd}
          dangerouslySetInnerHTML={{
            __html: t('who-am-i.1', { interpolation: { escapeValue: false } })
          }}
        />
        <motion.h2
          initial='hidden'
          animate={currentPage == 2 ? 'shown' : 'hidden'}
          variants={variants[2]}
          className='who_am_i subtext_2'
          onAnimationComplete={animationEnd}
          dangerouslySetInnerHTML={{
            __html: t('who-am-i.3', { interpolation: { escapeValue: false } })
          }}
        />
        <motion.h2
          initial='hidden'
          animate={currentPage == 3 ? 'shown' : 'hidden'}
          variants={variants[3]}
          className='who_am_i subtext_3'
          onAnimationComplete={animationEnd}
          dangerouslySetInnerHTML={{
            __html: t('who-am-i.2', { interpolation: { escapeValue: false } })
          }}
        />
      </motion.div>
    </div>
  )
}

export default ExperiencePages

const containerStyle = { height: '100vh', width: '100vw', overflowX: 'hidden' }
const wrapperStyle = {
  height: '100vh',
  width: `100vw`,
  overflowX: 'hidden',
  display: 'flex',
  flexDirection: 'row'
}

const transition = {
  duration: 2,
  ease: 'easeOut'
}

const variants = {
  0: {
    hidden: {
      y: '-100vh',
      scale: 0,
      opacity: 0,
      transition: transition
    },
    shown: {
      y: '0vh',
      scale: 1,
      opacity: 1,
      transition: transition
    }
  },
  1: {
    hidden: {
      scale: 0,
      transition: transition,
      x: '200vw'
    },
    shown: {
      scale: 1,
      transition: transition,
      x: '0vw'
    }
  },
  2: {
    hidden: {
      transition: transition,
      x: '-200vw',
      scale: 0
    },
    shown: {
      transition: transition,
      scale: 1,
      x: '0vw'
    }
  },
  3: {
    hidden: {
      transition: transition,
      scale: 0,
      x: '200vw'
    },
    shown: {
      transition: transition,
      scale: 1,
      x: '0vw'
    }
  }
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
        flexDirection: 'row',
        borderSize: '1px',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        height: '24px',
        width: '24px',
        margin: '0 4px '
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
