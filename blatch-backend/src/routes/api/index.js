const api = require('express').Router();
const emr = require('./emr');

api.use('/emr', emr);

module.exports = api;
