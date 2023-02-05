import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { languages } from 'utils/i18n/index'

const portuguese = languages.pt.name

const BrazilianFlag = () => {
  const { i18n } = useTranslation()

  const onClick = () => {
    i18n.changeLanguage(portuguese)
  }

  return (
    <motion.div 
    initial="unselected"
    animate={i18n.resolvedLanguage === portuguese? "selected": "unselected"}
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
        fill='none'
        initial='rest'
        whileHover='hover'
        width={45}
        height={45}
        viewBox='0 0 64 64'
        aria-hidden='true'
        role='img'
        preserveAspectRatio='xMidYMid meet'
        onClick={onClick}
      >
        <motion.circle
          transform='translate(2,2)'
          variants={variantscircle}
          stroke='black'
          cx='30'
          cy='30'
          r='30'
        />
        <motion.g>
          <motion.path
            variants={variantspath}
            d='M18.757 25.537a26.195 26.195 0 0 1 7.34-1.065c8.362 0 15.779 3.908 20.442 9.916c.128-.78.211-1.573.211-2.388c0-8.146-6.604-14.75-14.75-14.75c-5.825 0-10.846 3.384-13.243 8.287'
            fill='#000000'
          />
          <motion.path
            variants={variantspath}
            d='M26.097 28.493c-3.121 0-6.072.676-8.746 1.84A14.788 14.788 0 0 0 17.25 32c0 8.146 6.604 14.75 14.75 14.75c5.511 0 10.308-3.028 12.84-7.506c-3.635-6.395-10.665-10.751-18.743-10.751m-3.93 8.424a.983.983 0 1 1 0-1.966a.983.983 0 0 1 0 1.966m0-3.934a.982.982 0 1 1-.002-1.964a.982.982 0 0 1 .002 1.964m3.933 5.901a.983.983 0 1 1 0-1.966a.983.983 0 0 1 0 1.966m5.9 3.932a.982.982 0 1 1-.002-1.964a.982.982 0 0 1 .002 1.964m0-3.932a.983.983 0 1 1 0-1.966a.983.983 0 0 1 0 1.966m3.934 1.966a.981.981 0 1 1 0-1.965a.981.981 0 1 1 0 1.965m3.933 1.966a.982.982 0 1 1-.003-1.965a.982.982 0 0 1 .003 1.965m0-3.932a.983.983 0 1 1-.002-1.966a.983.983 0 0 1 .002 1.966'
            fill='#000000'
          />
          <motion.path
            variants={variantspath}
            d='M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2zm28 30a27.99 27.99 0 0 1-.652 5.994L32 51.667L4.653 37.994C4.229 36.062 4 34.058 4 32s.229-4.062.653-5.994L32 12.333l27.348 13.673A27.99 27.99 0 0 1 60 32z'
            fill='#000000'
          />
        </motion.g>
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
    strokeWidth: 5,
    fill: '#FFFFFF',
    pathLength: 0,
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeOut'
    }
  },
  hover: {
    strokeWidth: 5,
    stroke: '#000000',
    fill: '#000000',
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
export default BrazilianFlag
