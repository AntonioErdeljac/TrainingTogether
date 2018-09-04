const db = require('../../db');

module.exports = async (req, res) => {
  try {
    console.error('getLatest');
    const rentsAfterToday = await db.Rents.getRentsAfterToday();
    const rentsBeforeToday = await db.Rents.getRentsBeforeToday();

    const latestRent = rentsBeforeToday.length === 0 ? rentsAfterToday[0] : rentsBeforeToday[0];

    return res.status(200).json(latestRent).end();
  } catch(error) {
    console.error(error);
  }
}