const data = require('./jsonReviews.json');
const mongoose = require('mongoose');
const dbModel = require('../db/models/review.js');
const _ = require('lodash');

let seedDb = function(data) {
  _.each(data, (review) => {
    mongoose.connect('mongodb://192.168.99.100:27017/open_table_reviews');
    //mongoose.connect('mongodb://localhost/open_table_reviews');
    let reviewPromise = dbModel.insertOne(review);
    reviewPromise
      .then((doc) => {
        mongoose.disconnect();
        console.log(doc);
      })
      .catch((err) => {
        console.log(err);
      });
  });
};
seedDb(data);
