const fs = require('fs');

exports.saveVideo = (req, res) => {
  const { base64 } = req.body;

  fs.writeFile(
    `uploads/${new Date().valueOf()}.webm`,
    new Buffer(base64, 'base64'),
    err => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('video saved');
      res.status(200).send();
    }
  );
};
