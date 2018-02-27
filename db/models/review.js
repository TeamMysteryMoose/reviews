const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
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

const ReviewModel = mongoose.model('Review', reviewSchema);

function findAll(search = {}, sort = {}) {
  return ReviewModel.find(search).sort(sort);
}

function distinctValues(field) {
  return ReviewModel.distinct(field);
}

function insertOne(review) {
  const newReview = new ReviewModel(review);
  return newReview.save();
}

exports.findAll = findAll;
exports.insertOne = insertOne;
exports.distinctValues = distinctValues;
