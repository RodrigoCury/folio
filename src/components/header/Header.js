import { Link } from 'react-router-dom'
import './Header.scss'

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>
          <Link to='/'>CURY</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to='/about-me'>About Me</Link>
            </li>
            <li>
              <Link to='/experience'>Experience</Link>
            </li>
            <li>
              <Link to='/tech'>Techs</Link>
            </li>
            <li>
              <Link to='/about-folio'>About Portfolio</Link>
            </li>
            <li className='btn'>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
