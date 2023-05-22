const { Type } = require('../db');

const allTypes = async () => {
    const types = await Type.findAll({
        attributes: ['name'],
    });
    return types; //.map((type) => type.name);
};

module.exports = { allTypes };
