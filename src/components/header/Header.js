import { useRef } from 'react'
import { useDimensions } from '../../utils/hooks/useDimensions'
import { motion } from 'framer-motion'
import './Header.scss'
import { Navigation } from './Navigation'
import { MenuToggle } from './MenuToggle'
import { useState } from 'react'
import useClickOutside from '../../utils/hooks/useClickOutside'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2.5 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
      width: {
        delay: 0,
        duration: 0.1
      }
    }
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      width: {
        delay: 1
      },
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}

const nav = {
  open: {
    width: '300px',
    height: '100vh',
    transition: {
      delay: 0,
      duration: 0.1
    }
  },
  closed: {
    width: '70px',
    height: '10vh',
    transition: {
      delay: 1
    }
  }
}

export const Header = () => {
  const containerRef = useRef(null)

  const [isOpen, setIsOpen] = useState(false)
  const { height } = useDimensions(containerRef)

  const toggleOpen = () => {
    setIsOpen((isOpen) => !isOpen)
  }

  const close = () => {
    if (isOpen) {
      setIsOpen(false)
    }
  }

  useClickOutside(containerRef, close)

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      className='nav'
      variants={nav}
      ref={containerRef}
    >
      <motion.div className='background' variants={sidebar}></motion.div>
      <Navigation isOpen={isOpen} />
      <MenuToggle toggle={toggleOpen} close={close} />
    </motion.nav>
  )
}
