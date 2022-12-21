const {Router} =require('express')
const { getInfo } = require('../controllers/getInfo')

const router = Router()
const {Pokemon, Type} = require('../db')

router.get('/', async (req, res) =>{
    try {
        return res.status(200).json(await getInfo())
    } catch (error) {
        console.log(error)
        return res.status(400).send('algo salio malll')
    }
})

router.get('/:id', async (req, res) =>{
    try {
        const id = req.params
        
    } catch (error) {
        console.log(error)
        return error
    }
})

module.exports= router