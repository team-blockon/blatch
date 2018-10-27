const emr = require('express').Router();
const controller = require('./emr.controller');

emr.post('/', controller.getEmr);

module.exports = emr;
