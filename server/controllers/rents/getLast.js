const db = require('../../db');

module.exports = async (req, res) => {
  try {
    const rent = await db.Rents.getLast();

    return res.status(200).json(rent);
  } catch (error) {
    console.error(error);
  }
}