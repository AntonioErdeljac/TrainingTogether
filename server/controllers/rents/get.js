const db = require('../../db');

module.exports = async (req, res) => {
  try {
    console.error('get');
    const rents = await db.Rents.get();

    return res.status(200).json(rents).end();
  } catch (error) {
    console.error(error);
  }
}