import { useReducer } from "react";
import React from 'react'
import rootReducer, { GET_ALL_TYPES, GET_POKEMON, init, initialState } from "../../reducers";
import axios from "axios";
import { useEffect } from "react";
import Cards from '../Cards/Cards'
import './Home.css'
import { Navbar } from "../Navbar/Navbar";
import { allPokemones } from "../../actions";



async function getJson(){
  const json = await axios.get('http://localhost:3001/pokemon')
  return json.data
}






const Home = () => {
    const [state, dispatch] = useReducer(rootReducer, initialState, init)
    
    const getPokemons = async ()=> dispatch({
      type:GET_POKEMON,
      payload: await getJson()})
    
    useEffect(()=>{
      getPokemons()
      /* allPokemones(dispatch) */
    })
  return (
    <div>
      <Navbar></Navbar>
      <div className="cardContainer">
          {console.log(state.pokemons)}
          {state.pokemons.map((pokemones, index)=>(
            <Cards title={pokemones.name} stats={pokemones.types/* .map((type) => type.type ) */} img={pokemones.img} />
          ))}
      </div>
    </div>
  )
}

export default Home