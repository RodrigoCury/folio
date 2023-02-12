import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Home, Experience, ContactMe, Tech } from '../pages'
import { HelmetProvider } from 'react-helmet-async'

export const AppRoutes = () => {
  const location = useLocation()

  
  return (
    <HelmetProvider>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='' element={<Home />} />
          <Route path='contact' element={<ContactMe />} />
          <Route path='experience' element={<Experience />} />
          <Route path='tech' element={<Tech />} />
          <Route element={<Home />} />
        </Routes>
      </AnimatePresence>
    </HelmetProvider>
  )
}