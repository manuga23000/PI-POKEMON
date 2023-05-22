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
    const typeObjects = await Type.findAll({ where: { name: types } });
    // Asociamos los tipos encontrados con el nuevo Pokemon
    await newPokemon.addType(typeObjects);
    // Agregamos los objetos de tipo encontrados como una propiedad del nuevo Pokemon
    newPokemon.types = typeObjects;
    // Devolvemos el nuevo Pokemon creado con sus tipos asociados
    return newPokemon;
};

const getAllPokemons = async () => {
    const pokemonDB = await getDbPokemons(); // Obtiene los pokemones de la base de datos
    const pokeAPI = await pokeapi(); // Obtiene los pokemones de la API
    return [...pokemonDB, ...pokeAPI]; // Retorna una lista con todos los pokemones obtenidos (de la base de datos y de la API)
};

const getPokemonByName = async (name) => {
    const allPokemons = await getAllPokemons();
    return allPokemons.filter(
        (pokemon) => pokemon.name.toLowerCase() === name.toLowerCase()
    );
};

// Esta es una función asincrónica que devuelve una lista de objetos JSON que representan los registros de pokémon en la base de datos, incluyendo sus tipos relacionados.
const getDbPokemons = async () => {
    // Aquí se utiliza el método "findAll" de Sequelize, que busca todos los registros de la tabla "Pokemon" de la base de datos. Además, se incluyen los tipos relacionados con los pokémon utilizando la opción "include".
    const dbPokemons = await Pokemon.findAll({
        include: {
            model: Type, // El modelo Type es el modelo asociado con la tabla "types" en la base de datos.
        },
    });

    // Luego se utiliza el método "map" para transformar cada objeto de pokémon en un objeto JSON y se agrega un atributo "types" que contiene los tipos del pokémon como una cadena separada por comas.
    return dbPokemons.map((pokemon) => {
        return {
            ...pokemon.toJSON(),
            types: pokemon.types.map((type) => type.name).join(' '), // El método "map" se utiliza para obtener el nombre de cada tipo del pokémon y se unen en una cadena separada por comas utilizando el método "join".
        };
    });
};

const pokeapi = async () => {
    // Realiza una petición GET a la API de Pokemon con los parámetros offset=0 y limit=40
    const response = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?offset=0&limit=60'
    );
    // Extrae la URL de cada uno de los resultados y los almacena en un array
    const urls = response.data.results.map((pokemon) => pokemon.url);
    // Espera a que se resuelvan todas las promesas de la petición a cada una de las URLs
    const pokemonInfo = await Promise.all(
        urls.map((url) => getPokemonInfo(url))
    );
    // Retorna el array con la información de cada Pokémon
    return pokemonInfo;
};

const getPokemonInfo = async (url) => {
    // Realiza una petición GET a la URL del Pokémon
    const response = await axios.get(url);
    // Capitaliza la primera letra del nombre del Pokémon
    const capitalizedFirstLetter =
        response.data.name.charAt(0).toUpperCase() +
        response.data.name.slice(1);
    // Retorna un objeto con la información del Pokémon, incluyendo el nombre capitalizado
    return {
        id: response.data.id,
        name: capitalizedFirstLetter,
        life: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        speed: response.data.stats[5].base_stat,
        height: response.data.height,
        weight: response.data.weight,
        image: response.data.sprites.other.dream_world.front_default,
        types: response.data.types.map((type) => type.type.name).join(' '),
    };
};

// Esta es una función asincrónica que devuelve la información de un pokémon específico según el origen especificado.
const getPokemonById = async (id, source) => {
    if (source === 'bdd') {
        // Si el origen es la base de datos, se llama a la función "getDbPokemonById" para obtener la información del pokémon.
        const pokemonDB = await getDbPokemonById(id);
        if (pokemonDB) {
            // Si se encontró un registro de pokémon en la base de datos con el ID especificado, se transforma a un objeto JSON y se agrega un atributo "types" que contiene los tipos del pokémon como una cadena separada por comas.
            return {
                ...pokemonDB.toJSON(),
                types: pokemonDB.types.map((type) => type.name).join(' '),
            };
        }
    } else if (source === 'api') {
        // Si el origen es la API, se llama a la función "getPokemonInfo" para obtener la información del pokémon.
        const pokemonAPI = await getPokemonInfo(
            `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        return pokemonAPI;
    }
};

// Esta es una función asincrónica que devuelve la información de un pokémon específico de la base de datos.
const getDbPokemonById = async (id) => {
    return Pokemon.findOne({
        // Se utiliza el método "findOne" de Sequelize para buscar un registro de pokémon con el ID especificado.
        where: { id }, // La opción "where" se utiliza para especificar el filtro de búsqueda.
        include: {
            // Se incluyen los tipos relacionados con el pokémon utilizando la opción "include".
            model: Type, // El modelo Type es el modelo asociado con la tabla "types" en la base de datos.
        },
    });
};

module.exports = {
    createPokemonController,
    getAllPokemons,
    getPokemonByName,
    getPokemonById,
};
