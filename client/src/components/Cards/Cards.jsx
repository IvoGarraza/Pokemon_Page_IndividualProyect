import React from 'react'
import './Cards.css'

const Cards = (props) => {
  return (
    <div className='Card'>
        <img>{props.img}</img>
        <div>
            <h3>{props.title}</h3>
            <p>{props.stats}</p>
        </div>
    </div>
  )
}

export default Cards