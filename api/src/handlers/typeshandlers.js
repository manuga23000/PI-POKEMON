const { TypesController } = require('../controllers/typescontrollers');

const getTypesHandler = async (req, res) => {
    try {
        const types = await TypesController();
        res.status(201).json(types);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getTypesHandler };
