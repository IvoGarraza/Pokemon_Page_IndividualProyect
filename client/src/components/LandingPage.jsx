import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { buttonLanding } from '../styles/styles.jsx'
import styled from 'styled-components'
import Button from './Button/Button.jsx'

const LandingPage = () => {
  
  return (
    <landingStyle>
      <h1>Landing page</h1>
      <p>
        Welcome to Pokemon Page, here can fin a list of pokemons and his stats
      </p>
      {/* <Link to='/home'><button id="reproductor">Ingresar</button></Link> */}
      <Button></Button>
    </landingStyle>
  )
}

export default LandingPage


const landingStyle = styled.div`
    width: 1000px;
    height: 500px;
    border-color: 1px solid black;
    background-color: white;
    h1{
      color: white
    }
`