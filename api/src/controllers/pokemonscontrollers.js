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
    const addtypes = await Type.findAll({ where: { name: types } });
    await newPokemon.addType(addtypes);
    newPokemon.types = addtypes;
    return newPokemon;
};

const getAllPokemons = async () => {
    const pokemonDB = await getDbPokemons();
    const pokeAPI = await getPokeAPIPokemons();
    return [...pokemonDB, ...pokeAPI];
};

const getPokemonByName = async (name) => {
    const allPokemons = await getAllPokemons();
    return allPokemons
        .filter((pokemon) =>
            pokemon.name.toLowerCase().includes(name.toLowerCase())
        )
        .slice(0, 12);
};

const getDbPokemons = async () => {
    const dbPokemons = await Pokemon.findAll({
        include: {
            model: Type,
        },
    });
    return dbPokemons.map((pokemon) => {
        return {
            ...pokemon.toJSON(),
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
            .base_stat,
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
        types: response.data.types.map((type) => type.type.name).join(' '),
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
