const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api', require('./routes/api'));

app.listen(port, () => {
  console.log(`Express listening on port ${port}`);
});
