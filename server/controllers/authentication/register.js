const db = require('../../db');
const { errorMessages } = require('../../constants');
const { errors } = require('../../utils');

module.exports = async (req, res) => {
  try {
    const existingUser = await db.Users.getByEmail(req.body.email);

    if (existingUser) {
      return res.status(409).json({ message: errorMessages.USER_EMAIL_409 }).end();
    }

    if(!db.Users.isValid(req.body)) {
      return res.status(400).json({ message: errorMessages.USER_400 }).end();
    }

    const createdUser = await db.Users.create(req.body);

    return res.status(200).json(createdUser).end();

  } catch (error) {
    return errors.respond(res, error);
  }
}