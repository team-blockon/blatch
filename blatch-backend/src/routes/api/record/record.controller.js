const Record = require('../../../models/record');
const fs = require('fs');
const crypto = require('crypto');

exports.saveVideo = (req, res) => {
  const { base64 } = req.body;
  const filename = `${new Date().valueOf()}.webm`;

  fs.writeFile(`uploads/${filename}`, new Buffer(base64, 'base64'), err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('video saved');

    // sha256 hash
    const hash = crypto.createHash('sha256');
    hash.update(base64);
    const digest = hash.digest('hex');
    console.log('sha256 digest:', digest);

    Record.create(filename, digest);

    res.status(200).send({
      digest
    });
  });
};

exports.downloadVideo = (req, res) => {};
