import React from 'react'
import styles from './Cards.module.css'
import charmander from '../../assets/test.json'

const Cards = (props) => {
  return (
    <div className={styles.Card}>
      <div className={``}>
        <img>{props.img}</img>
        <div>
            <h3>{props.title}</h3>
            <p>{props.stats}</p>
        </div>
      </div>
    </div>
  )
}

export default Cards


