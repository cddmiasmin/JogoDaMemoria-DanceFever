import React from 'react'
import { ReactDOM } from 'react'
import Borda from './componentes/bordas/Bordas'
import Cabecalho from './componentes/cabecalho/Cabecalho'
import MesaCartas from './componentes/mesa-de-cartas/MesaCartas'

function App() {
  return (
    <>
      <Cabecalho/>
      <MesaCartas/>
      <Borda/>
    </>
  )
}

export default App
