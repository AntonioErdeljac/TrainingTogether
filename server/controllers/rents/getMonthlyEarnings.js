const moment = require('moment');
const _ = require('lodash');
require('moment/locale/hr');

moment.locale('hr')

const db = require('../../db');

module.exports = async (req, res) => {
  try {
    const rents = await db.Rents.get();

    const months = {};

    rents.forEach((rent) => {
      const month = moment(rent.date).format('MMMM');


      months[month] = _.sumBy(rents.map(data => {
        if(moment(data.date).format('MMMM') === month && moment(data.date).format('YYYY') === moment().format('YYYY')) {
          return { ...data, price: parseInt(data.price) };
        }
      }), 'price')
    });

    return res.status(200).json(months).end();
  } catch (error) {
    console.error(error);
  }
}