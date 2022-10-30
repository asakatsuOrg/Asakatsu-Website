import './components/light and dark/lightDark.scss'
import Navbar from './components/NavbarContributor/NavbarContributor.component'
import Profile from './routes/Goal/Goal.component'
import Home from './routes/Home/Home.component'

import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import useLocalStorage from './hooks/useLocalStorage'

function App() {

  const location = useLocation();
  
  const NavbarHover = () => {
    const goalBG = document.querySelector('.goal .bg2');
    goalBG.classList.add('bg2Active');
  }
  const NavbarHover2 = () => {
    const goalBG = document.querySelector('.goal .bg2');
    goalBG.classList.remove('bg2Active');
  }

  // Dark mode
  const [ darkMode, setDarkMode ] = useLocalStorage('darkMode', false);

  const colorChanging = e => {
    const value = e.target.checked;
    value ? setDarkMode(true) : setDarkMode(false)
  }

  if (darkMode) {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }

  return (
    <AnimatePresence mode='wait'>
      <Routes key={location.pathname} location={location} >
        <Route path='/' element={ <Home colorToggling={colorChanging} darkMode={darkMode} /> } ></Route>
        <Route path='/contributor' element={<Navbar Hover={NavbarHover} NotHover={NavbarHover2} />}>
          <Route index element={<Profile />}></Route>
          <Route path=':id' element={<Profile />}></Route>
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App
