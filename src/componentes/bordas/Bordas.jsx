import React from 'react'
import './bordas.css'

const Bordas = () => {
  return (
    <div className='rodape'>
        <div className='rodape__container'>
            <div className='feito__por'>
                <p>Denvolvido por</p>
                <img src="https://raphaelbrodrigues.github.io/images/git.png" alt="Logo GitHub" />
                <a href="https://github.com/cddmiasmin">/cddmiasmin</a>
            </div>

            <div className='credito__ftm'>
                <p>Créditos à </p>
                <a href="https://florenceandthemachine.net"> Florence And The Machine</a>
            </div>
        </div>
    </div>
  )
}

export default Bordas