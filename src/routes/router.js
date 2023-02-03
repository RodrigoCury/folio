import { createBrowserRouter } from 'react-router-dom'
import { Root } from '../components/root/Root'
import { Home, AboutFolio, Experience, ContactMe, Tech } from '../pages'

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
        element: <></>
      },
      {
        path: 'contact',
        element: <ContactMe />
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
