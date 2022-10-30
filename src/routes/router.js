import { createBrowserRouter } from 'react-router-dom'
import { Root } from '../components/root/Root'
import { Home, AboutFolio, AboutMe, Contact, Experience, Tech } from '../pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about-folio',
        element: <AboutFolio />
      },
      {
        path: 'about-me',
        element: <AboutMe />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'experience',
        element: <Experience />
      },
      {
        path: 'tech',
        element: <Tech />
      }
    ]
  }
])
