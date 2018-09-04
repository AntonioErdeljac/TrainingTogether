const { rents } = require('../../controllers');
const { paths } = require('../../constants');

module.exports = (router) => {
  router.get(paths.api.v1.RENTS, rents.get);
  router.post(paths.api.v1.RENTS, rents.create);

  router.get(paths.api.v1.RENTS_LATEST, rents.getLatest);
  router.get(paths.api.v1.RENTS_UPCOMING, rents.getUpcoming);

  router.get(paths.api.v1.RENTS_TILL_TODAY, rents.getTillToday);

  router.get(paths.api.v1.RENTS_DATE, rents.getByDate);

  router.delete(paths.api.v1.RENTS_ID, rents.removeById);

  router.put(paths.api.v1.RENTS_ID, rents.updateById);

  router.get(paths.api.v1.RENTS_ID, rents.getById);

  router.get(paths.api.v1.RENTS_LAST, rents.getLast);

  router.get(paths.api.v1.MONTHLY_EARNINGS, rents.getMonthlyEarnings);
};