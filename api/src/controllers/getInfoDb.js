const {Pokemon, Type } = require('../db')



const getInfodb = async () =>{
    return await Pokemon.findAll({
        include: {
            model: Type,
            attributes: ['name'],
            through:{
                attributes:[]
            },
        }
    })
}

module.exports= {
    getInfodb
}