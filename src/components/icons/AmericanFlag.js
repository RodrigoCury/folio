import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { languages } from 'utils/i18n/index'

const english = languages.en.name

const AmericanFlag = () => {
  const { i18n } = useTranslation()

  const onClick = () => {
    i18n.changeLanguage(english)
  }

  return (
    <motion.div
      initial="unselected"
      animate={i18n.resolvedLanguage === english? "selected": "unselected"}
      variants={divVariants}
      style={{
        width: 48,
        height: 48,
        padding: 1,
        borderWidth: 2,
        border: 'solid',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        scale: 0.7
      }}
    >
      <motion.svg
        width={40}
        height={40}
        x='0px'
        y='0px'
        onClick={onClick}
        viewBox='0 0 512 512'
        fill='none'
        initial='rest'
        whileHover='hover'
        strokeWidth={5}
        animate='rest'
      >
        <motion.circle
          variants={variantscircle}
          stroke='black'
          cx='256'
          cy='256'
          r='256'
        />
        <motion.path
          variants={variantspath}
          d='M244.87,256H512c0-23.106-3.08-45.49-8.819-66.783H244.87V256z'
        />
        <motion.path
          variants={variantspath}
          d='M244.87,122.435h229.556c-15.671-25.572-35.708-48.175-59.07-66.783H244.87V122.435z'
        />
        <motion.path
          variants={variantspath}
          d='M256,512c60.249,0,115.626-20.824,159.356-55.652H96.644C140.374,491.176,195.751,512,256,512z'
        />
        <motion.path
          variants={variantspath}
          d='M37.574,389.565h436.852c12.581-20.529,22.338-42.969,28.755-66.783H8.819   C15.236,346.596,24.993,369.036,37.574,389.565z'
        />
        <motion.path
          variants={variantspath}
          d='M118.584,39.978h23.329l-21.7,15.765l8.289,25.509l-21.699-15.765L85.104,81.252l7.16-22.037  C73.158,75.13,56.412,93.776,42.612,114.552h7.475l-13.813,10.035c-2.152,3.59-4.216,7.237-6.194,10.938l6.596,20.301l-12.306-8.941  c-3.059,6.481-5.857,13.108-8.372,19.873l7.267,22.368h26.822l-21.7,15.765l8.289,25.509l-21.699-15.765l-12.998,9.444  C0.678,234.537,0,245.189,0,256h256c0-141.384,0-158.052,0-256C205.428,0,158.285,14.67,118.584,39.978z M128.502,230.4  l-21.699-15.765L85.104,230.4l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822l-21.7,15.765L128.502,230.4z   M120.213,130.317l8.289,25.509l-21.699-15.765l-21.699,15.765l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822  L120.213,130.317z M220.328,230.4l-21.699-15.765L176.93,230.4l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822  l-21.7,15.765L220.328,230.4z M212.039,130.317l8.289,25.509l-21.699-15.765l-21.699,15.765l8.289-25.509l-21.7-15.765h26.822  l8.288-25.509l8.288,25.509h26.822L212.039,130.317z M212.039,55.743l8.289,25.509l-21.699-15.765L176.93,81.252l8.289-25.509  l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822L212.039,55.743z'
        />
      </motion.svg>
    </motion.div>
  )
}

const variantspath = {
  rest: {
    fill: '#000000',
    stroke: '#FFFFFF',
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeOut'
    }
  },
  hover: {
    fill: '#FFFFFF',
    stroke: '#000000',
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeOut'
    }
  }
}

const variantscircle = {
  rest: {
    stroke: '#FFFFFF',
    fill: '#FFFFFF',
    strokeWidth: 15,
    pathLength: 0,
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeOut'
    }
  },
  hover: {
    stroke: '#000000',
    fill: '#000000',
    strokeWidth: 15,
    pathLength: 1,
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeOut'
    }
  }
}

const divVariants = {
  selected: {
    borderColor: '#000000',
    borderRadius: 25,
    rotate: 360, transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeOut'
    }
  },
  unselected: {
    borderColor: '#FFFFFF',
    borderRadius: 15,
    rotate: 0, transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeOut'
    }
  }
}

export default AmericanFlag
