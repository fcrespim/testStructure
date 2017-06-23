const models = require('../../models');
const projectxModel = models.projectx;

module.exports = function (req, res, next) {
  let id = req.params.id;

  projectxModel.delete(id, function (err, secret) {
    if (err) return res.status(500).send('Ups! There was a error while trying to delete data from the DB');
    res.status(200).json(secret);
  });
};
