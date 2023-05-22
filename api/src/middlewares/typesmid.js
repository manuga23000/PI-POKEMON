const axios = require('axios');
const { Type } = require('../db');

// Definición de una variable llamada 'gate' y asignándole el valor booleano 'true'
let gate = true;

// Definición de la función middleware que se ejecuta antes de todas las rutas
// 'async' indica que la función es asíncrona y que puede contener operaciones asíncronas
const allTypesMiddleware = async (req, res, next) => {
    // Se verifica si la variable 'gate' es verdadera
    if (gate) {
        try {
            // Se realiza una solicitud HTTP GET a la API pública de Pokemon para obtener los tipos de Pokemon
            const response = await axios.get('https://pokeapi.co/api/v2/type');

            // Se ejecuta la operación asíncrona 'Promise.all()' que crea todas las promesas al mismo tiempo
            await Promise.all(
                response.data.results.map(async (t, index) => {
                    // Se crea un nuevo registro de tipo Pokemon en la base de datos con el id incrementado y el nombre del tipo
                    const type = await Type.create({
                        id: ++index,
                        name: t.name,
                    });
                    return type; // Retorna el nuevo registro creado
                })
            );

            // Si todo sale bien, se cambia el valor de la variable 'gate' a falso para no volver a ejecutar esta operación la próxima vez
            gate = false;
        } catch (error) {
            // Si ocurre un error, se devuelve una respuesta con un estado HTTP 400 y un mensaje de error
            res.status(400).json({ error: error.message });
        }
    }
    // Se llama a la función 'next()' para continuar con el siguiente middleware o la ruta correspondiente
    next();
};

// Se exporta la función middleware 'allTypesMiddleware' para su uso en otras partes de la aplicación
module.exports = { allTypesMiddleware };
