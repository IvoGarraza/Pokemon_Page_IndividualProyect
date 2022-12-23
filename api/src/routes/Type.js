const { Router } = require("express");
const router = Router()
const {getTypes} = require('../controllers/getTypes.js')


router.get('/', async(req, res) =>{
    try {
        const pokemonsTypes = getTypes()
        console.log(pokemonsTypes)
        return res.status(200).send( await getTypes())
    } catch (error) {
        console.log(error)
        return error
    }
})

module.exports = router