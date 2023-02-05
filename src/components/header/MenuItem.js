import * as React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    borderRadius: '10px' ,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    borderRadius: '10px' ,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

export const MenuItem = ({ name, link }) => {
  

  const { t } = useTranslation()

  return (
    <motion.li
      className='link-w'
      variants={variants}
      whileHover={{ scale: 1.1, borderRadius: '20px' }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={link} as='div' className='link'>
        {t(name)}
      </Link>
    </motion.li>
  )
}
