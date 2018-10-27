const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Record = new Schema({
  videoPath: String,
  videoHash: String
});

Record.statics.create = function(videoPath, videoHash) {
  const record = new this({
    videoPath,
    videoHash
  });
  return record.save();
};

module.exports = mongoose.model('Record', Record);
