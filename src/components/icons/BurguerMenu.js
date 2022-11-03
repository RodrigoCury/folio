import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const BurguerMenu = ({
  burguerMenuOpen = false,
  toggleMenu,
  className,
  ...props
}) => {
  const { t } = useTranslation()
  return (
    <>
      <div
        id='nav-icon3'
        className={`${className} ${burguerMenuOpen ? 'open' : ''}`}
        style={{
          transform: 'scale(0.5)'
        }}
        onClick={() => toggleMenu()}
        {...props}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={`menu-wrapper ${
          burguerMenuOpen ? 'show-menu' : 'hide-menu'
        }`}
      >
        <Link onClick={() => toggleMenu()} to='/about-me'>
          {t('about.me')}
        </Link>
        <Link onClick={() => toggleMenu()} to='/experience'>
          {t('experiencia')}
        </Link>
        <Link onClick={() => toggleMenu()} to='/tech'>
          {t('tecnologias')}
        </Link>
        <Link onClick={() => toggleMenu()} to='/about-folio'>
          {t('sobre.o.portifolio')}
        </Link>
        <Link onClick={() => toggleMenu()} id='contact-me' to='/contact'>
          {t('contate-me')}
        </Link>
      </div>
    </>
  )
}

export default BurguerMenu
