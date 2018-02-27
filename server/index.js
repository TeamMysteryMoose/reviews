const express = require('express');
const bodyParser = require('body-parser');
const reviewRouter = require('./routers/review.js');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://localhost/open_table_reviews');

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use('/restaurants', reviewRouter);

app.listen(8000, () => {
  // console.log('listening on port 8000');
});
