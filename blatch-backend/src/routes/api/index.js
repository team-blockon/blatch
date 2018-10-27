const api = require('express').Router();
const emr = require('./emr');
const record = require('./record');

api.use('/emr', emr);
api.use('/record', record);

module.exports = api;
