const { Type } = require('../db');

const TypesController = async () => {
    const types = await Type.findAll({
        attributes: ['name'],
    });
    return types;
};

module.exports = { TypesController };
