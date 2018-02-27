const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  restaurant_id: Number,
  food: Number,
  ambience: Number,
  service: Number,
  value: Number,
  stars: Number,
  username: String,
  userid: Number,
  date: Date,
  text: String,
  location: String,
  tags: Array,
  keywords: Array,
});

let ReviewModel = mongoose.model('Review', reviewSchema);

function findAll(search = {}, sort = {}) {
  return ReviewModel.find(search).sort(sort);
}

function insertOne(review) {
  let newReview = new ReviewModel(review)
  return newReview.save();
}

exports.findAll = findAll;
exports.insertOne = insertOne;
