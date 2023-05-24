const {
    createPokemonController,
    getAllPokemons,
    getPokemonByName,
    getPokemonById,
} = require('../controllers/pokemonscontrollers');

// createPokemonHandler recibe la solicitud del usuario para crear un nuevo Pokemon
const addPokemonHandler = async (req, res) => {
    const { name, image, life, attack, defense, speed, height, weight, types } =
        req.body;

    try {
        const filteredTypes = [types.type1, types.type2].filter(
            (type) => type !== undefined
        );

        const newPokemon = await createPokemonController({
            name,
            image,
            life,
            attack,
            defense,
            speed,
            height,
            weight,
            types: filteredTypes,
        });

        res.status(201).json({
            ...newPokemon.toJSON(),
            types: newPokemon.types.map((type) => type.name),
        });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const getPokemonsHandler = async (req, res) => {
    const { name } = req.query;
    try {
        if (name) {
            const results = await getPokemonByName(name.toLowerCase());
            if (results.length === 0) {
                res.status(404).json({
                    message: `No hay resultados para la búsqueda '${name}'`,
                });
            } else {
                res.status(201).json(results);
            }
        } else {
            const results = await getAllPokemons();
            res.status(201).json(results);
        }
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

const getPokemonByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const source = isNaN(id) ? 'bdd' : 'api';
        const response = await getPokemonById(id, source);
        res.status(201).send(response);
    } catch (error) {
        res.status(404).json({
            message: `No hay resultados para la búsqueda '${id}'`,
        });
    }
};

module.exports = {
    addPokemonHandler,
    getPokemonsHandler,
    getPokemonByIdHandler,
};
