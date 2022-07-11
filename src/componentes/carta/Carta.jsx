import React from 'react'
import './carta.css'

const Carta = () => {
  
  return (
    <div className='carta_container'>
        <div id='front'>
          <img src="src\assets\imagens\carta-verso.png" alt="Tarô" />
        </div>

        <div id='back'>
          <img src="https://media.graphassets.com/TovccoqrSqCtWOjnFmzU" alt="King" />
        </div>
    </div>
  )
}

export default Carta