const db = 'projects';
const query = '../query.js';

module.exports = {
  all: all,
  byID: byID
};

function all (callback) {
  let sql = `SELECT *
              FROM projectx`;
  query(db, sql, callback);            
}

function byID (id, callback) {
  let sql = `SELECT * 
              FROM projectx 
              WHERE id = ?`;
  let values = id;
  query(db, sql, values, callback);
};
