const models = require('../../models');
const projectxModel = models.projectx;

module.exports = function (req, res, next) {
  let id = req.params.id;

  projectxModel.find.byId(id, function (err, secret) {
    if (err) return res.status(500).send('Ups! There was a error while fetching data from the DB');
    if (!secret.length) res.status(404).send('Ups! The secret you are trying to find was not found.');
    res.status(200).json(secret);
  });
};
