import React from 'react'
import Carta from '../carta/Carta'
import './mesaCartas.css'

const MesaCartas = () => {
  return (
    <div className='mesa__container'>
      <div className="espaco">

      <div className={`espaco_cartas ${"D"}`}>
          <Carta />
          <Carta />
          <Carta />
          <Carta />
          <Carta />
          
          <Carta />
          <Carta />
          <Carta />
          <Carta />
          <Carta />

          <Carta />
          <Carta />
          <Carta />
          <Carta />
          <Carta />

          <Carta />
          <Carta />
          <Carta />
          <Carta />
          <Carta />

          <Carta />
          <Carta />
          <Carta />
          <Carta />
          <Carta />

          <Carta />
          <Carta />
          <Carta />
          <Carta />
          <Carta />   

          

        </div>

        <div className='espaco_end_game'>
          <div className='espaco_img_album '>
              <img src="https://media.graphassets.com/B75brCb1TC2OUaMXzJqF" alt="Albúm Dance Fever"/>
          </div>

          <div className='espaco_link_album'>
            <a href="" target="_blank">
              <img
                src="https://www.svgrepo.com/show/342240/spotify.svg" 
                alt="Ir para o Spotify" 
              />
            </a>

            <a href="" target="_blank">
              <img
                src="https://www.svgrepo.com/show/341609/apple-music.svg" 
                alt="Ir para o Spotify" 
              />
            </a>

            <a href="" target="_blank">
              <img
                src="https://www.svgrepo.com/show/122166/youtube.svg" 
                alt="Ir para o Spotify" 
              />
            </a>

            <a href="" target="_blank">
              <img
                src="https://www.svgrepo.com/show/360325/deezer.svg" 
                alt="Ir para o Spotify"
              />
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MesaCartas