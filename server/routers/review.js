const express = require('express');
const controller = require('../../db/controllers/review.js');

const router = express.Router();

router.route('/')
  .get((req, res) => {
    // console.log('GET for /restaurants');
    controller.restaurants.get(req, (err, data) => {
      if (err) throw err;
      res.send(JSON.stringify(data));
    });
  });

router.route('/:restaurant_id/reviews')
  .get((req, res) => {
    // console.log('GET for restaurant reviews');
    controller.reviews.get(req, (err, data) => {
      if (err) throw err;
      res.send(JSON.stringify(data));
    });
  });

router.route('/:restaurant_id/reviews/:review_id')
  .get((req, res) => {
    // console.log('GET for restaurant review');
    controller.review.get(req, (err, data) => {
      if (err) throw err;
      res.send(JSON.stringify(data));
    });
  });

module.exports = router;
