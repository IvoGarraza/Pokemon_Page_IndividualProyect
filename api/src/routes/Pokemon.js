const {Router} =require('express')
const { getInfo } = require('../controllers/Pokemon')

const router = Router()
const {Pokemon, Type} = require('../db')

router.get('/', async (req, res) =>{
    try {
        return res.status(200).send(await getInfo())
    } catch (error) {
        console.log(error)
        return res.status(400).send('algo salio malll')
    }
})

module.exports= router