import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './page/Navbar/Navbar.component'
import Profile from './page/Goal/Goal.component'

import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Profile />}></Route>
        <Route path=':id' element={<Profile />}></Route>
      </Route>
    </Routes>
  )
}

export default App
