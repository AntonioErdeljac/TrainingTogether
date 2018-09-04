const db = require('../../db');
const { build } = require('../../utils');

const { cookies } = require('../../constants');

module.exports = async (req, res, next) => {
  try {
    if (!req.cookies[cookies.AUTHENTICATION]) {
      return res.sendStatus(403);
    }

    const user = await db.Users.getBySessionToken(req.cookies[cookies.AUTHENTICATION]).lean();

    if (!user) {
      res.clearCookie(cookies.AUTHENTICATION, build.cookieOptions());

      if (req.path.indexOf('/api/') === 0) {
        return res.status(401).end();
      }

      return res.sendStatus(403);
    }

    req.identity = { user };

    return next();
  } catch (e) {
    return res.status(500).end();
  }
};
