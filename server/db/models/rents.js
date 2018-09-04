const mongoose = require('mongoose');
const _ = require('lodash');

const schemaTypes = require('./schemaTypes');

const { Schema } = mongoose;

const Rents = mongoose.model('rents', new Schema({
  location: schemaTypes.string({ required: true }),
  price: schemaTypes.string({ required: true }),
  date: schemaTypes.date({ required: true }),
  items: [{
    name: schemaTypes.string(),
    amount: schemaTypes.string()
  }],
}));

module.exports.isValid = values => !Rents(values).validateSync();

module.exports.removeById = id => Rents.findOneAndRemove({ _id: id });

module.exports.getById = id => Rents.findOne({ _id: id });

module.exports.updateById = (id, values) => {
  const rent = _.omit(values, ['_id']);

  const query = {
    _id: id,
  };

  return Rents.findOneAndUpdate(query, { $set: rent }, { new: true });
};

module.exports.getRentsAfterToday = async () => {
  const rents = await Rents.find({date: {
    $gte: new Date(),
  }})
  .sort({ date: 1 })

  return rents;
};

module.exports.getRentsBeforeToday = async () => {
  const rents = await Rents.find({date: {
    $lte: new Date(),
  }})
  .sort({ sort: - 1 })

  return rents;
};

module.exports.get = () => {
  return Rents.find();
};

module.exports.create = (values) => {
  return Rents.create(values);
};

module.exports.getAmountOfRentsBeforeDate = async (date) => {
  const rents = await Rents.find({date: {
    $lte: date,
  }})

  return rents.length;
};

module.exports.getRentsByDate = (date) => {
  return Rents.find({ date: date });
};

module.exports.getLast = () => {
  return Rents.findOne().sort({ createdAt: 1 });
};