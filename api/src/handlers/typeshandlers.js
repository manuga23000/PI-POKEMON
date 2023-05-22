const { allTypes } = require('../controllers/typescontrollers');

const getTypesHandler = async (req, res) => {
    try {
        const types = await allTypes();
        res.status(201).json(types);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getTypesHandler };
