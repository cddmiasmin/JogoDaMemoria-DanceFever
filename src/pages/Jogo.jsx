import React from 'react'
import { useNavigate } from 'react-router-dom'
import Rodape from '../componentes/rodape/Rodape';
import Poster from '../componentes/poster/Poster';
import Cabecalho from '../componentes/cabecalho/Cabecalho'
import MesaCartas from '../componentes/mesa/MesaCartas'
import './styles/jogo.css'
import { useNivel } from '../hook/useNivel'

const Jogo = (props) => {

  const {
    nivel,
    setNivel
  } = useNivel();

  const teste = false
  const irPagHome = useNavigate();

  
  console.log(nivel)

  return (
    <div className='page_jogo'>
      <div className="jogo">
        <Cabecalho img="src\assets\imagens\ftm.png"/>
        {teste ? <MesaCartas/> : 
        <>
            <Poster/>
            <br />
            <button onClick={irPagHome}>jogar novamente</button>
            <br />
        </>
        } 
        <Rodape/>
      </div>
      <div className="wallpaper"/>
      <Rodape/>
    </div>
  );
}

export default Jogo