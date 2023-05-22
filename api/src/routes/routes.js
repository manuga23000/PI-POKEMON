const { Router } = require('express');
const {
    createPokemonHandler,
    getPokemonsHandler,
    getPokemonByIdHandler,
} = require('../handlers/pokemonshandler');
const { getTypesHandler } = require('../handlers/typeshandlers');
const { allTypesMiddleware } = require('../middlewares/typesmid');

const router = Router();

router.get('/pokemons', getPokemonsHandler);

router.get('/pokemons/:id', getPokemonByIdHandler);

router.get('/types', allTypesMiddleware, getTypesHandler);

router.post('/pokemons', allTypesMiddleware, createPokemonHandler);

module.exports = router;
