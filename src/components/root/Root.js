import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import './Root.scss'

export const Root = () => {
  return (
    <>
      <Header />
      <div className='app-root'>
        <Outlet />
      </div>
    </>
  )
}
