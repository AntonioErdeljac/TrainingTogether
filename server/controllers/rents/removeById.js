const db = require('../../db');

module.exports = async (req, res) => {
  try {
    console.error('removeById');
    const { id } = req.params;

    await db.Rents.removeById(id);

    return res.status(200).end();
  } catch(error) {
    console.error(error);
  }
}