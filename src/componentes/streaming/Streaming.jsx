import React from 'react'
import './streaming.css'

const Streaming = (props) => {
  return (
    <div className='stream'>
        <a href={props.url} target="_blank">
            <img
                src={props.icon}
                alt={`Ir para ${props.streaming}`}
            />
        </a>
    </div>
  )
}

export default Streaming