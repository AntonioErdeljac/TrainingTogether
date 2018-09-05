const mongoose = require('./mongoose');
const models = require('./models');

module.exports.mongoose = mongoose;

module.exports.Users = models.users;