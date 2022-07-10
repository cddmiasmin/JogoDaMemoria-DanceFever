import React from 'react'
import './cabecalho.css'

const Cabecalho = (props) => {
  return (
    <div className='cabecalho__estilo'>
      <img src={props.img} alt="Logo Florence And The Machine" />
    </div>
  )
}

export default Cabecalho