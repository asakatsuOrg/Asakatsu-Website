import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './page/NavbarContributor/NavbarContributor.component'
import Profile from './page/Goal/Goal.component'
import Home from './page/Home/Home.component'

import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={ <Home /> } ></Route>
      <Route path='/contributor' element={<Navbar />}>
        <Route index element={<Profile />}></Route>
        <Route path=':id' element={<Profile />}></Route>
      </Route>
    </Routes>
  )
}

export default App
