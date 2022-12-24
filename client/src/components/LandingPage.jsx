import React from 'react'
import { Link } from 'react-router-dom'
import { buttonLanding } from '../styles/styles.styled'

const LandingPage = () => {
  return (
    <div>
      <h1>Landing page</h1>
      <p>
        Welcome to Pokemon Page, here can fin a list of pokemons and his stats
      </p>
      <Link to='/home'><buttonLanding>ENTRAR</buttonLanding></Link>
    </div>
  )
}

export default LandingPage