const { Router } = require('express');
const {
    addPokemonHandler,
    getPokemonsHandler,
    getPokemonByIdHandler,
} = require('../handlers/pokemonshandler');
const { getTypesHandler } = require('../handlers/typeshandlers');
const { TypesMiddleware } = require('../middlewares/typesmiddleware');

const router = Router();

router.get('/pokemons', getPokemonsHandler);

router.get('/pokemons/:id', getPokemonByIdHandler);

router.get('/types', TypesMiddleware, getTypesHandler);

router.post('/pokemons', TypesMiddleware, addPokemonHandler);

module.exports = router;
