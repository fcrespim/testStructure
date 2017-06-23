const mysql = require('mysql');
const dbConfig = require('./dbConfig.json');
const connection = mysql.createConnection(dbConfig);

module.exports = function (db, sql, values, callback) {
  connection.query(`USE ${db} `, function (err) {
    if (err) return console.error('Error connecting: ' + err.stack);
    connection.query(sql, values, function (err, rows) {
      if (err) return callback(err);
      callback(null, rows);
    });
  });
};
