import React from 'react'
import {useNavigate} from 'react-router-dom'
import './styles/home.css'
import '../main-styles/fontes.css' 
import Cabecalho from '../componentes/cabecalho/Cabecalho'  
import Rodape from '../componentes/rodape/Rodape'
import { useNivel } from '../hook/useNivel'

function Home() {

  const {
    nivel,
    setNivel
  } = useNivel();

  const navigate = useNavigate()

  const nivelEscolhido = (id, key) => {
    setNivel({
      "nivel":`${id}`,
      "pares":`${key}`
    } )
    
    console.log(nivel)
    navigate('/jogo')
  }

  return (
    <div className='page_home'>
      <div className='home'>
        <div className="cabecalho">
          <Cabecalho img="src\assets\imagens\ftm.png"/>
          <Cabecalho img="src\assets\imagens\dance-fever-reading.png"/>
        </div>

        <div className='texto'>
          <p>Escolha o nível que deseja jogar:</p>
        </div>

        <div className='niveis'>
          <img onClick={() => nivelEscolhido("F", 2)} src='src\assets\imagens\facil.png' alt='Nível fácil'/>
          <img onClick={() => nivelEscolhido("M", 3)} src='src\assets\imagens\medio.png' alt='Nível médio'/>
          <img onClick={() => nivelEscolhido("D", 15)} src='src\assets\imagens\dificil.png' alt='Nível difícil'/>
        </div>

        <Rodape/>
      </div>
      <div className="wallpaper"/>
    </div>
  );
} 

export default Home