import React from 'react'
import Rodape from '../componentes/rodape/Rodape';
import Cabecalho from '../componentes/cabecalho/Cabecalho'
import MesaCartas from '../componentes/mesa-de-cartas/MesaCartas'
import './jogo.css'

const Jogo = () => {
  return (
    <div className='page_jogo'>
      <div className="jogo">
        <Cabecalho img="src\assets\imagens\ftm.png"/>
        <MesaCartas/>
      </div>
      <div className="wallpaper"/>
      <Rodape/>
    </div>
  );
}

export default Jogo