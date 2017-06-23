const models = require('../../models');
const projectxModel = models.projectx;

module.exports = function (req, res, next) {
  let data = req.body.data;

  projectxModel.create(data, function (err, secret) {
    if (err) return res.status(500).send('Ups! There was a error while inserting data to the DB');
    res.status(200).json(secret);
  });
};
