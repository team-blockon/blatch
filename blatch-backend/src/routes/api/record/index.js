const record = require('express').Router();
const controller = require('./record.controller');

record.post('/', controller.saveVideo);
record.post('/download', controller.downloadVideo);

module.exports = record;
