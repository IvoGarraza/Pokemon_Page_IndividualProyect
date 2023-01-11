import React from 'react'
import styles from './Cards.module.css'
import charmander from '../../assets/test.json'

const Cards = (props) => {
  return (
    <div className={styles.Card}>
      <div>
        <img src={props.img}></img>
        <h3>{props.title}</h3>
        <div>
            {props.stats.map(type=>(
              <p>{type.type}</p>
            ))}
            {/* <p>{props.stats}</p> */}
        </div>
      </div>
    </div>
  )
}

export default Cards


