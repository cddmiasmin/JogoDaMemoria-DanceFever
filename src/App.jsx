import React from 'react'
import { ReactDOM } from 'react'
import Borda from './componentes/bordas/Bordas'
import Cabecalho from './componentes/cabecalho/Cabecalho'
import MesaCartas from './componentes/mesa-de-cartas/MesaCartas'
import Modo from './componentes/modo/Modo'

function App() {
  return (
    <div className='container_geral'>
      <Cabecalho/>
      <MesaCartas/>
      <Borda/>
    </div>
  )
}

export default App
