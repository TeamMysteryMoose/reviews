const express = require('express');
const bodyParser = require('body-parser');
const reviewRouter = require('./routers/review.js');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

//mongoose.connect('mongodb://127.0.0.1/open_table_reviews');
mongoose.connect('mongo:27017/open_table_reviews');

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use('/restaurants', reviewRouter);

app.listen(8000, () => {
  // console.log('listening on port 8000');
});
