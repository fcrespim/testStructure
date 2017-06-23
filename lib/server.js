const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

module.exports = function () {
  // configuration ===============================================================

  // set up
  app.use(morgan('dev')); // log every request to the console
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

  // routes ======================================================================
  require('../config/routes.js')(app); // load our routes and pass in our app

  return app;
};
