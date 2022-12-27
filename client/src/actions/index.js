import axios from 'axios'

export function getPokemons(){
    return async function(dispatch){
        var json = await axios.get('http://localhost:3001/pokemons', {

        })

        return dispatch({
            type: "GET_POKEMON",
            payload: json.data
        })
    }
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