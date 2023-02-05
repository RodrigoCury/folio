import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Home, AboutFolio, Experience, ContactMe, Tech } from '../pages'

export const AppRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='' element={<Home />} />
        <Route path='about-folio' element={<AboutFolio />} />
        <Route path='about-me' element={<div />} />
        <Route path='contact' element={<ContactMe />} />
        <Route path='experience' element={<Experience />} />
        <Route path='tech' element={<Tech />} />
      </Routes>
    </AnimatePresence>
  )
}
