const axios = require('axios');
const { Type } = require('../db');

// Variable para almacenar la promesa de inicialización de tipos de Pokémon
let typesPromise = null;

// Función para inicializar los tipos de Pokémon
const initializeTypes = async () => {
    try {
        // Realiza una solicitud GET a la API pública de Pokémon para obtener los tipos
        const response = await axios.get('https://pokeapi.co/api/v2/type');
        const types = response.data.results;

        // Crea un array de promesas para crear los tipos en la base de datos
        const typePromises = types.map(async (type, index) => {
            // Crea un nuevo registro de tipo de Pokémon en la base de datos con el id incrementado y el nombre del tipo
            await Type.create({ id: index + 1, name: type.name });
        });

        // Espera a que todas las promesas se resuelvan
        await Promise.all(typePromises);
    } catch (error) {
        // Si ocurre un error, lanza una excepción con un mensaje de error
        throw new Error('Failed to initialize Pokémon types');
    }
};

// Middleware para asegurar la inicialización de los tipos de Pokémon
const TypesMiddleware = async (req, res, next) => {
    // Verifica si la promesa de inicialización ya está en progreso
    if (!typesPromise) {
        // Si no hay ninguna promesa en curso, inicia la inicialización de tipos
        typesPromise = initializeTypes();
    }

    try {
        // Espera a que se resuelva la promesa de inicialización
        await typesPromise;
        next(); // Llama a la siguiente función de middleware o ruta
    } catch (error) {
        res.status(400).json({ error: error.message }); // Si hay un error, devuelve una respuesta con el mensaje de error
    }
};

module.exports = { TypesMiddleware };
