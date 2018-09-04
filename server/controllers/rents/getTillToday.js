const db = require('../../db');

module.exports = async (req, res) => {
  try {
    console.error('getTillToday');
    const rentsBeforeToday = await db.Rents.getRentsBeforeToday();

    return res.status(200).json(rentsBeforeToday).end();
  } catch(error) {
    console.error(error);
  }
}