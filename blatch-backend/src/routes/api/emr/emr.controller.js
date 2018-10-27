const emrJSON = require('../../../models/json/emr.json');

exports.getEmr = (req, res) => {
  res.json(emrJSON);
};
