import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { buttonLanding } from '../../styles/styles.jsx'
import styled from 'styled-components'
import Button from '../Button/Button.jsx'

const LandingPage = () => {
  
  return (
    <landingStyle>
      <h1 className='titleLanding'>Landing page</h1>
      <p>
        Welcome to Pokemon Page, here can find a list of pokemons and his stats
      </p>
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
    .titleLanding{
      color: white;
      
    }
`