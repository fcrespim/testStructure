const models = require('../../models');
const projectxModel = models.projectx;

module.exports = function (req, res, next) {
  let id = req.params.id;
  let data = req.body.data;

  projectxModel.update(data, id, function (err, secret) {
    if (err) return res.status(500).send('Ups! There was a error while update new data to the DB');
    res.status(200).json(secret);
  });
};
