const controllers = require('../controllers');
module.exports = function (app) {
  // ***** MAIN ***** //
  app.get('/', controllers.mainpage.find);
  // ***** API ***** //
  app.route('/API/projectx')
    .get(controllers.projectx.find)
    .post(controllers.projectx.create)
    .put(controllers.projectx.update)
    .delete(controllers.projectx.delete);
  // ***** PAGE X ***** //
  // app.get('/pageX', controllers.pageX);
  // ***** PAGE Y ***** //
};
