const db = require('../../db');

module.exports = async (req, res) => {
  try {
    console.error('create');
    if(!db.Rents.isValid(req.body)) {
      return res.status(400).end();
    }

    const exisitingRents = await db.Rents.get();

    const rent = await db.Rents.create({ ...req.body });

    return res.status(200).json(rent).end();
  } catch(error) {
    console.error(error);
  }
}