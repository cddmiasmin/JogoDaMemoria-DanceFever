import React from 'react'
import './pagina404.css'
import Rodape from '../componentes/rodape/Rodape'
import Cabecalho from '../componentes/cabecalho/Cabecalho'  

const Pagina404 = () => {
  return (
    <div className='page_404'>
        <div className='erro_container'>            
            <Cabecalho img="src\assets\imagens\ftm.png"/>
            <Cabecalho img="src\assets\imagens\dance-fever-reading.png"/>
            <p>PÁGINA NÃO ENCONTRADA</p>
            <img className='icon' src="src\assets\imagens\dance-fever-404.png" alt="" />
            <Rodape/>
        </div>
        <div className="wallpaper"/>
    </div>
  )
}

export default Pagina404