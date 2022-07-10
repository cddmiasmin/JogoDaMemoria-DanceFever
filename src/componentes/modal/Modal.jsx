import React from 'react'
import './modal.css'

const Modal = () => {
  return (
    <div className='modal_container'>
      <div className='estrutura_modal'>
        <div className='boas_vindas'>
          <h1> Bem-vind@ ao Dance Fever Memory </h1>
          <h5> Escolha o nível que deseja jogar:</h5>
        </div>

        <div className='niveis_jogo'>
          <div id="F" className='nivel'>
            <img src="src\imagens\facil.png" alt="Nível fácil" />
          </div>
          
          <div id="M" className='nivel'>
            <img src="src\imagens\medio.png" alt="Nível médio" />
          </div>

          <div id="D" className='nivel'>
            <img src="src\imagens\dificil.png" alt="Nível difícel" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal