const {Router} =require('express')
const { getAllPokemons } = require('../controllers/getAllPokemons')

const router = Router()
const {Pokemon, Type} = require('../db')

router.get('/', async (req, res) =>{
    const {name} = req.query
    const allInfo = await getAllPokemons()
    if(name){
        const pk = allInfo.filter( e => e.name.toLowerCase()=== name.toLowerCase());
        pk.length ? res.status(200).send(pk) : res.status(404).send('pokemon no encontrado')
    }else{

        const infoMainRoute = allInfo.map( e => {
            return {
                name: e.name,
                img: e.img,
                types: e.type,
                createdInDb: e.createdInDb
            }
        })
        console.log(infoMainRoute)
        return res.status(200).send(infoMainRoute)
    }
})


router.get('/:id', async (req, res) =>{
    try {
        const id = req.params['id']
        const allPkId = await getAllPokemons();
        try {
            let pokemonId = allPkId.filter( e => e.id == id);
            pokemonId.length ? res.status(200).send(pokemonId) : res.status(404).send('Pokemon not found')
        } catch (error) {
            console.log(error)
            return error
        }
        
    } catch (error) {
        console.log(error)
        return error
    }
})

router.post('/', async (req, res) =>{
    const { name, type, health, attack, defense, speed, height, weight} = req.body
    
    if(name){
       const allPks = await getAllPokemons();
       const poke = allPks.find( e => e.name === name.toLowerCase())
       if(!poke){
        try {
            const pokemonCreated = Pokemon.create({
                name,
                health,
                attack,
                defense,
                speed,
                height,
                weight
            })
            const typeDb = await Type.findAll({
                where: {
                    name: type
                }
            })
            pokemonCreated.addType(typeDb)
            return res.status(200).send(pokemonCreated)
    
        } catch (error) {
            console.log(error)
            return error
        }
       }else{
        return res.status(404).send('Pokemon name already exist ')
       }
    }else{
        return res.status(404).send('Pokemon name is obligatory')
    }
})

module.exports= router