import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './Header.scss'

export default function Header() {
  const { t } = useTranslation()

  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>
          <Link to='/'>
            <p className='title'>{t('cury')}</p>
          </Link>
        </div>
        <nav>
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
        </nav>
      </div>
    </header>
  )
}
