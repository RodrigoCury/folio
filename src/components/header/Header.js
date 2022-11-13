import BurguerMenu from 'components/icons/BurguerMenu'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import useAccentColor from 'utils/hooks/useAccentColors'
import useMediaQuery from 'utils/hooks/useMediaQuery'
import './Header.scss'

export default function Header() {
  const { t } = useTranslation()

  const showBurguerMenu = useMediaQuery('(max-width: 1200px)')

  const [burguerMenuOpen, setBurguerMenuOpen] = useState(false)

  const toggleMenu = () => {
    setBurguerMenuOpen((open) => !open)
  }

  const accentColors = useAccentColor()
  useEffect(() => {
    accentColors()
  }, [showBurguerMenu])

  useEffect(() => {
    setBurguerMenuOpen(false)
  }, [showBurguerMenu])

  return (
    <header>
      <div className={`header-inner`}>
        <div className='logo'>
          <Link to='/'>
            <p className='title'>{t('cury')}</p>
          </Link>
        </div>
        <nav>
          {!showBurguerMenu && (
            <ul>
              <li>
                <Link to='/about-me'>{t('about.me')}</Link>
              </li>
              <li>
                <Link to='/experience'>{t('experiencia')}</Link>
              </li>
              <li>
                <Link to='/tech'>{t('tecnologias')}</Link>
              </li>
              <li>
                <Link to='/about-folio'>{t('sobre.o.portifolio')}</Link>
              </li>
              <li className='btn'>
                <Link to='/contact'>{t('contate-me')}</Link>
              </li>
            </ul>
          )}
          {showBurguerMenu && (
            <>
              <BurguerMenu
                className='burguer-menu'
                burguerMenuOpen={burguerMenuOpen}
                toggleMenu={toggleMenu}
              />
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
