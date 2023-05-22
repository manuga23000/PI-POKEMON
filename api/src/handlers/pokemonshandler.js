const {
    createPokemonController,
    getAllPokemons,
    getPokemonByName,
    getPokemonById,
} = require('../controllers/pokemonscontrollers');

// createPokemonHandler recibe la solicitud del usuario para crear un nuevo Pokemon
const createPokemonHandler = async (req, res) => {
    const { name, image, life, attack, defense, speed, height, weight, types } =
        req.body;
    try {
        const newPokemon = await createPokemonController({
            name,
            image,
            life,
            attack,
            defense,
            speed,
            height,
            weight,
            types: [types.type1, types.type2].filter(Boolean), // Filtrar tipos no seleccionados (undefined)
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
    const { name } = req.query; // Obtiene el parámetro "name" de la consulta HTTP
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
        res.status(400).json({ error: error.message });
    }
};

const getPokemonByIdHandler = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? 'bdd' : 'api';
    try {
        const response = await getPokemonById(id, source);
        res.status(201).send(response);
    } catch (error) {
        res.status(404).json({
            message: `No hay resultados para la búsqueda '${id}'`,
        });
    }
};

module.exports = {
    createPokemonHandler,
    getPokemonsHandler,
    getPokemonByIdHandler,
};
