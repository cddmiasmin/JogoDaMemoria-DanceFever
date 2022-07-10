import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Jogo from './pages/Jogo.jsx'
import Pagina404 from './pages/Pagina404.jsx'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={ <Home /> } />
      <Route path='/jogo' element={ <Jogo /> } />
      <Route path='*' element={ <Pagina404 /> } />
    </Routes>
  )
}

export default App
