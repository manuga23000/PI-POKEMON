const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routes = require('./routes');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', routes);

module.exports = router;

/*
const { Router } = require('express');

En esta línea, se está importando el módulo Router desde el paquete 'express'. Router es una clase proporcionada por Express que permite definir rutas en una aplicación web.
const routes = require('./routes');

Aquí se está importando un módulo llamado 'routes' desde un archivo llamado 'routes.js'. Este módulo contiene definiciones de rutas específicas para la aplicación.
const router = Router();

Se crea una instancia de Router llamada router. Esta instancia se utilizará para definir y organizar las rutas de la aplicación.
router.use('/', routes);

Esta línea indica que se utilizará el enrutador router para todas las rutas que comiencen con '/' (la raíz del sitio). Además, el enrutador utilizará las rutas definidas en el módulo importado anteriormente, es decir, en el archivo 'routes.js'.
module.exports = router;

Esta línea exporta el enrutador router para que esté disponible para otros módulos que lo requieran. Cuando se importe este archivo en otro archivo, se obtendrá el enrutador configurado con las rutas definidas.
*/
