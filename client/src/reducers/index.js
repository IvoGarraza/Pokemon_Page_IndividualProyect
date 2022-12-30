export const GET_POKEMON = 'GET_POKEMON';
export const GET_ALL_TYPES = 'GET_ALL_TYPES';
export const FILTER_CREATED = 'FILTER_CREATED';
export const ORDER_NAME = 'ORDER_NAME';
export const FILTER_TYPE = 'FILTER_TYPE';
export const ORDER_STR = 'ORDER_STR';
export const GET_POKEMON_NAME = 'GET_POKEMON_NAME'
export const POST_POKEMON = 'POST_POKEMON'
export const GET_DETAILS = 'GET_DETAILS';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';
export const CLEAN_POKEMONS = 'CLEAN_POKEMONS'


const initialState = {
    pokemons : [],
    allPokemons: [],
    types: [],
    pokeDetail:[]
}

const rootReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_POKEMON:
            return{
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload
            };
    
        default:
            break;
    }
}

export default rootReducer;