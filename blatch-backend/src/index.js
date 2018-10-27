const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(morgan('dev'));

app.use('/api', require('./routes/api'));

app.listen(port, () => {
  console.log(`Express listening on port ${port}`);
});

mongoose.connect(
  'mongodb://localhost:27017/blatch',
  { useNewUrlParser: true }
);
const db = mongoose.connection;

db.on('error', console.error);
db.once('open', () => {
  console.log('connected to mongodb server');
});
