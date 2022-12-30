import axios from 'axios'
import { GET_POKEMON } from '../reducers'
const url = 'http://localhost:3001/pokemons'



export function getPokemons(){
    return async function(dispatch){
        try {

            var json = await axios.get( url, {
                 headers:{
                    "Accept-Encoding": "null"
                 }   
            })
    
            return dispatch({
                type: GET_POKEMON,
                payload: json.data
            })
            
        } catch (error) {
            console.log(error)
            return error
        }

    }
}

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


export function getType(){
    return async function(dispatch){
        var info = axios.get('http://localhost:3001/types')
    }
    return dispatch({
        type: "GET_TYPES",
        payload: inf
    })
}