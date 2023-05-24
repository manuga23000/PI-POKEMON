const axios = require('axios');
const { Type } = require('../db');

let typesPromise = null;

const initializeTypes = async () => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/type');
        const types = response.data.results;

        const typePromises = types.map(async (type, index) => {
            await Type.create({ id: index + 1, name: type.name });
        });

        await Promise.all(typePromises);
    } catch (error) {
        throw new Error('Failed to initialize Pokémon types');
    }
};

const TypesMiddleware = async (req, res, next) => {
    if (!typesPromise) {
        typesPromise = initializeTypes();
    }

    try {
        await typesPromise;
        next();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { TypesMiddleware };
