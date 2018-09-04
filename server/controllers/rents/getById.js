const db = require('../../db');

module.exports = async (req, res) => {
  try {
    console.error('getByid');
    const { id } = req.params;

    const rent = await db.Rents.getById(id);

    return res.status(200).json(rent).end();
  } catch(error) {
    console.error(error);
  }
}