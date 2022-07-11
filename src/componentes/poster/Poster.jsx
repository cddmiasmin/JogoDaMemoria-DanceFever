import React from 'react'
import Streaming from '../streaming/Streaming'
import './poster.css'

const Poster = () => {
  return (
    <div className='poster'>
        <div className='imagem_poster'>
            <img src="src\assets\imagens\capa-dance-fever.jpg" alt="Albúm Dance Fever"/>
        </div> 

        <div className='streamings'>
            <Streaming 
                url="https://open.spotify.com"
                icon="https://www.svgrepo.com/show/342240/spotify.svg"
                streaming="Spotify"
            />
        </div>
    </div>
  )
}

export default Poster