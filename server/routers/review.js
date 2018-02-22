const express = require('express');
const reviewController = require('../../db/controllers/review.js');

const router = express.Router();

router.route('/')
  .get(function(req, res) {
    console.log('GET for /api/reviews');
    reviewController.reviews.get(req, function(err, data) {
      if (err) console.log(err);
      res.send(JSON.stringify(data));
    });
  });

router.route('/:rest_id')
  .get(function(req, res) {});

router.route('/:rest_id/:id')
  .get(function(req, res) {});

module.exports = router;
