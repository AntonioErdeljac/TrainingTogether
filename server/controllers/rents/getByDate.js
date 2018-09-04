const db = require('../../db');

module.exports = async (req, res) => {
  try {
    console.error('getByDate');
    const { date } = req.params;

    const rents = await db.Rents.getRentsByDate(date);

    return res.status(200).json(rents).end();
  } catch(error) {
    console.error(error);
  }
}