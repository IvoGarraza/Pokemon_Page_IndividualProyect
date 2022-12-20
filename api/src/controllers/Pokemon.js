const axios = require('axios')




const getInfo = async ()=>{
    try {
        const infoApi = await axios.get('https://pokeapi.co/api/v2/pokemon', {
            headers:{
                "Accept-Encoding": "null"
            }
        })
        console.log(infoApi.data)
        return infoApi.data
    } catch (error) {
        console.log('algo fallo')
        return error
    }
}




module.exports={
    getInfo
}