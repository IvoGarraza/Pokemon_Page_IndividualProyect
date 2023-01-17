import axios from 'axios'
import { GET_POKEMON, CLEAN_POKEMONS } from '../reducers'
const url = 'http://localhost:3001/pokemon'


async function getJson(){
    const json = await axios.get('http://localhost:3001/pokemon')
    return json.data
}



export const getPokemons = async (dispatch)=> dispatch({
    type:GET_POKEMON,
    payload: await getJson()})

export const cleanPokemons= (dispatch)=>{
    return dispatch({
        type: CLEAN_POKEMONS,
        payload: []
    })
}


export function reloadPokemons(){
    return{
        type: "RELOAD_POKEMONS"
    }
}

export function setCurrentPage(payload){
    return{
        type: "CURR_PAGE",
        payload
    }
}

/* 
export function getType(){
    return async function(dispatch){
        var info = axios.get('http://localhost:3001/types')
    }
    return dispatch({
        type: "GET_TYPES",
        payload: inf
    })
} */