const axios = require('axios')


const getInfoApi = async ()=>{
    try {
        // defino la url en una variable y creo un conjunto vacio de pokemones para luego agregarlos
        let url = 'https://pokeapi.co/api/v2/pokemon'
        let pokemones = []
        do {
            //traigo la info de la api
            let infoApi = await axios.get( url, {
                headers:{
                    "Accept-Encoding": "null"
                }
            })
            //mapeo esa data de la info para devolverlos indivdualmente con su nombre y url
            let infoApiData = infoApi.data.results.map( e =>{
                return{
                    name: e.name,
                    url: e.url
                }
            })
            /* console.log(infoApiData) */
            //agrego esos pokemones al conjunto creado anteriormente
            pokemones.push(...infoApiData);
            url = infoApi.data.next
            /* console.log(pokemones) */
        } while (url != null && pokemones.length < 100);
        /* console.log(pokemones) */
        /* return pokemones */
        //traigo la data de cada pokemon
        let pkInfo = await Promise.all(pokemones.map( async e => {
            let pokemon = await axios.get(e.url, { headers: {"Accept-Encoding": "null"}});
            console.log(pokemon)
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
                weight: pokemon.data.weight,
                createdInDd: false,
            }
        }))
        /* console.log(pkInfo) */
        return pkInfo
    } catch (error) {
        console.log('algo fallo', error)
        return error
    }
}





module.exports={
    getInfoApi
}