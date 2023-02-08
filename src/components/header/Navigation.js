import * as React from 'react'
import { motion } from 'framer-motion'
import { MenuItem } from './MenuItem'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import BrazilianFlag from 'components/icons/BrazillianFlag'
import AmericanFlag from 'components/icons/AmericanFlag'

export const Navigation = ({isOpen}) => {
  const { t } = useTranslation()

  return (
    <div>
      <motion.div
        className={`title ${!isOpen ? 'link-disabled' : ''}`}
        whileHover={{ scale: 1.2 }}
        transition={{
          stiffness: 1000,
          velocity: -100
        }}
        variants={titleVariants}
      >
        <Link to='/'>{t('cury')}</Link>
      </motion.div>
      <motion.ul variants={variants}>
        {menuItems.map(({ link, name }, i) => (
          <MenuItem i={i} isOpen={isOpen} key={i} link={link} name={name} />
        ))}
      </motion.ul>
      <motion.div
        style={{
          position: 'absolute',
          bottom: 10,
          left: 0,
          width: 140,
          display: 'flex',
          paddingLeft: 80,
          paddingRight: 80,
          justifyContent: 'space-around',
          alignItems: 'center'
        }}
        variants={translationVariants}
      >
        <BrazilianFlag />
        <AmericanFlag />
      </motion.div>
    </div>
  )
}

const menuItems = [
  { link: '/about-me', name: 'about.me' },
  { link: '/experience', name: 'experiencia' },
  { link: '/tech', name: 'tecnologias' },
  { link: '/contact', name: 'contate-me' }
]

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}
const titleVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    x: -50,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 }
    }
  }
}
const translationVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 }
    }
  }
}