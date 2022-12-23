const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routerPokemon = require('./Pokemon.js')
const routerTypes = require('./Type.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemon', routerPokemon)
router.use('/types', routerTypes)


module.exports = router;
