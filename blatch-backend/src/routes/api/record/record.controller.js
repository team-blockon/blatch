const fs = require('fs');

exports.saveVideo = (req, res) => {
  const { base64 } = req.body;

  fs.writeFile(
    `uploads/${new Date().valueOf()}.webm`,
    new Buffer(base64, 'base64'),
    (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('video saved');
    }
  );
};
