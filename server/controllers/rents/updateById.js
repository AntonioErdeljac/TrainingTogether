const db = require('../../db');

module.exports = async (req, res) => {
  try {
    console.error('updatebyId');
    const { id } = req.params;

    if (!db.Rents.isValid(req.body)) {
      return res.sendStatus(400);
    }

    const rent = await db.Rents.updateById(id, req.body);

    return res.status(200).json(rent).end();
  } catch(error) {
    console.error(error);
  }
};