const axios = require('axios')


const getDetail = async () =>{
    try {
        let pkInfo = await Promise.all(pokemones.map( async e => {
            let pokemon = await axios.get(e.url,{headers:{"Accept-Encoding": "null"}
            });
            return{
                id: pokemon.data.id,
                name: pokemon.data.name,
                img: pokemon.data.sprites.front_default,
                type: pokemon.data.types.map( e =>{
                    return{
                        type: e.type.name
                    }
                }),
                health: pokemon.data.stats[0].base_stat,
                attack: pokemon.data.stats[1].base_stat,
                defense: pokemon.data.stats[2].base_stat,
                speed: pokemon.data.stats[5].base_stat,
                height: pokemon.data.height,
                weight: pokemon.data.weight
            }
        }))
        console.log(pkInfo)
        return pkInfo  
    } catch (error) {
        console.log(error)
        return error
    }
}