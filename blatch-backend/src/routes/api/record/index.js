const record = require('express').Router();
const controller = require('./record.controller');

record.post('/', controller.saveVideo);

module.exports = record;
