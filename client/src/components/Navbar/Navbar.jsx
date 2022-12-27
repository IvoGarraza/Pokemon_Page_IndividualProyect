import React from 'react'
import './Navbar.css'
import lupa from '../../assets/lupa.png'

export const Navbar = () => {
  return (
    <div className='navbarContainer'>
      <div className='logoContainer'>
        <h2>Pokemon</h2>
      </div>
      <div className='searchContainer'>
        <h2>Busqueda</h2>
        <input placeholder='Escribi tu pokemon...'></input>
        {/* <img src={lupa}></img> */}
      </div>
      <div className='botonesNav'>
          <a>create</a>
          <a>filtrado</a>
      </div>
    </div>
  )
}
