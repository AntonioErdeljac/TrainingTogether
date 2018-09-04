const db = require('../../db');

module.exports = async (req, res) => {
  try {
    console.error('getUpcoming');
    const rentsAfterToday = await db.Rents.getRentsAfterToday();
    const rentsBeforeToday = await db.Rents.getRentsBeforeToday();

    const upcomingRent = rentsAfterToday[0];

    console.error(rentsAfterToday)

    const rentsByDate = await db.Rents.getRentsByDate(rentsAfterToday[0] ? rentsAfterToday[0].date : new Date());


    return res.status(200).json({ upcomingRent, rentsByDate: rentsByDate }).end();
  } catch(error) {
    console.error(error);
  }
}