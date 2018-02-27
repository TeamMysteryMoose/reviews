const model = require('../models/review.js');

const restaurants = {
  get: function get(req, callback) {
    model.distinctValues('restaurant_id')
      .then((data) => {
        callback(null, data);
      })
      .then((err) => {
        callback(err, null);
      });
  },
};

const reviews = {
  get: function get(req, callback) {
    const restaurantId = req.params.restaurant_id;
    model.findAll({ restaurant_id: restaurantId })
      .then((data) => {
        callback(null, data);
      })
      .then((err) => {
        callback(err, null);
      });
  },
};

const review = {
  get: function get(req, callback) {
    const restaurantId = req.params.restaurant_id;
    const reviewId = req.params.review_id;
    model.findAll({ id: reviewId, restaurant_id: restaurantId })
      .then((data) => {
        callback(null, data);
      })
      .then((err) => {
        callback(err, null);
      });
  },
};

module.exports.restaurants = restaurants;
module.exports.reviews = reviews;
module.exports.review = review;
