const mongoose = require('./mongoose');
const models = require('./models');

module.exports.mongoose = mongoose;

module.exports.Rents = models.rents;
module.exports.Users = models.users;