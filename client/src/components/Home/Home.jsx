import React from 'react'
import Cards from '../Cards/Cards'
import './Home.css'
import charmander from '../../assets/test.json'
import imagen from '../../assets/4.png'


const Home = () => {
  return (
    <div>
      <div>
        <h1>Pokedex</h1>
      </div>
      <div className='cardContainer'>
        <Cards title={charmander.name} stats={charmander.type.type} img={imagen}></Cards>
        <Cards title='Pokemon' stats='asdasdasdasdasdsdasdasd'></Cards>
        <Cards title='Pokemon' stats='asdasdasdasdasdsdasdasd'></Cards>
        <Cards title='Pokemon' stats='asdasdasdasdasdsdasdasd'></Cards>
        <Cards title='Pokemon' stats='asdasdasdasdasdasdsdasd'></Cards>
        <Cards title='Pokemon' stats='asdasdasdasdasdasdsdasd'></Cards>
        <Cards title='Pokemon' stats='asdasdasdasdasdasdsdasd'></Cards>
        <Cards title='Pokemon' stats='asdasdasdasdasdasdsdasd'></Cards>
        <Cards title='Pokemon' stats='asdasdasdasdasdasdsdasd'></Cards>
        <Cards title='Pokemon' stats='asdasdasdasdasdasdsdasd'></Cards>
      </div>
      
    </div>
  )
}

export default Home