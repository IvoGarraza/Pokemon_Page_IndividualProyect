const axios = require('axios')
const {Type} = require('../db.js')


const getTypes = async () =>{
    const typesApi = await axios.get('https://pokeapi.co/api/v2/type', {headers:{"Accept-Encoding":"Null"}})
    
    const pokemonsTypeNames = typesApi.data.results.map( e => e.name)
    pokemonsTypeNames.forEach(element => {
        Type.findOrCreate({
            where:{
                name: element
            }
        })
    });
    const allTypes = await Type.findAll()
    console.log(allTypes)
    return allTypes
}

module.exports={getTypes}