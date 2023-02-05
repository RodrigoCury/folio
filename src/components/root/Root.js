import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from 'routes/router'
import { Header } from '../header/Header'
import './Root.scss'

export const Root = () => {
  return (
    <BrowserRouter>
      <Header/>
        <div className='app-root'>
          <AppRoutes />
        </div>
    </BrowserRouter>
  )
}
