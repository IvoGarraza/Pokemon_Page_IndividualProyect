const { getInfoApi } = require("./getInfoApi")
const { getInfodb } = require('./getInfoDb')


const getAllPokemons = async () =>{
    const pokesApi= await getInfoApi();
    const pokesDb = await getInfodb()
    const allPokemons = [...pokesApi, ...pokesDb]
    return allPokemons
}


module.exports= {getAllPokemons}