const { Pokemon, Type } = require('../db');
const axios = require('axios');

const createPokemonController = async ({
    name,
    image,
    life,
    attack,
    defense,
    speed,
    height,
    weight,
    types,
}) => {
    // Creamos un nuevo Pokemon en la base de datos con los valores recibidos
    const newPokemon = await Pokemon.create({
        name,
        image,
        life,
        attack,
        defense,
        speed,
        height,
        weight,
    });
    // Buscamos los objetos de tipo en la base de datos que coincidan con los nombres recibidos
    const addtypes = await Type.findAll({ where: { name: types } });
    // Asociamos los tipos encontrados con el nuevo Pokemon
    await newPokemon.addType(addtypes);
    // Agregamos los objetos de tipo encontrados como una propiedad del nuevo Pokemon
    newPokemon.types = addtypes;
    // Devolvemos el nuevo Pokemon creado con sus tipos asociados
    return newPokemon;
};

const getAllPokemons = async () => {
    const pokemonDB = await getDbPokemons();
    const pokeAPI = await getPokeAPIPokemons();
    return [...pokemonDB, ...pokeAPI];
};

const getPokemonByName = async (name) => {
    const allPokemons = await getAllPokemons();
    return allPokemons.filter(
        (pokemon) => pokemon.name.toLowerCase() === name.toLowerCase()
    );
};

const getDbPokemons = async () => {
    // Realiza una consulta a la base de datos utilizando el modelo Pokemon y realiza un JOIN con el modelo Type
    const dbPokemons = await Pokemon.findAll({
        include: {
            model: Type,
        },
    });
    // Mapea los objetos pokemon obtenidos en un nuevo array
    return dbPokemons.map((pokemon) => {
        // Convierte el objeto pokemon a JSON para obtener una representación plana de los datos
        // y facilitar su manipulación y envío spreed operator descompone un objeto
        return {
            ...pokemon.toJSON(),
            // Mapea los tipos asociados al pokemon y los une en una cadena separada por espacios
            types: pokemon.types.map((type) => type.name).join(' '),
        };
    });
};

const getPokeAPIPokemons = async () => {
    const response = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?offset=0&limit=60'
    );

    const urls = response.data.results.map((pokemon) => pokemon.url);
    const pokemonInfo = await Promise.all(
        urls.map((url) => getPokemonInfo(url))
    );

    return pokemonInfo;
};

const getPokemonInfo = async (url) => {
    const response = await axios.get(url);
    const capitalizedFirstLetter =
        response.data.name.charAt(0).toUpperCase() +
        response.data.name.slice(1);

    return {
        id: response.data.id,
        name: capitalizedFirstLetter,
        life: response.data.stats.find((stat) => stat.stat.name === 'hp')
            .base_stat, // Use find() to retrieve the stat by name
        attack: response.data.stats.find((stat) => stat.stat.name === 'attack')
            .base_stat,
        defense: response.data.stats.find(
            (stat) => stat.stat.name === 'defense'
        ).base_stat,
        speed: response.data.stats.find((stat) => stat.stat.name === 'speed')
            .base_stat,
        height: response.data.height,
        weight: response.data.weight,
        image: response.data.sprites.other.dream_world.front_default,
        types: response.data.types.map((type) => type.type.name).join(' '), // Use a comma instead of a space to separate types
    };
};

const getPokemonById = async (id, source) => {
    if (source === 'bdd') {
        const pokemonDB = await getDbPokemonById(id);
        if (pokemonDB) {
            return {
                ...pokemonDB.toJSON(),
                types: pokemonDB.types.map((type) => type.name).join(' '),
            };
        }
    } else if (source === 'api') {
        const pokemonAPI = await getPokemonInfo(
            `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        return pokemonAPI;
    }
};

const getDbPokemonById = async (id) => {
    const pokemon = await Pokemon.findOne({
        where: { id },
        include: {
            model: Type,
        },
    });
    return pokemon;
};

module.exports = {
    createPokemonController,
    getAllPokemons,
    getPokemonByName,
    getPokemonById,
};
