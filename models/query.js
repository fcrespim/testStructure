const database = require('../config/db');

module.exports = function (db, sql, values, callback) {
  // if there are 3 params
  if (typeof values === 'function') {
    callback = values;
    values = [];
  }
  database(db, sql, values, callback);
};
