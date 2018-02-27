/* eslint-env jest */
const mongoose = require('mongoose');
const model = require('../db/models/review.js');

describe('test if reviews db is populated and db model methods work as expected', () => {
  beforeAll(() => {
    mongoose.connect('mongodb://localhost/open_table_reviews');
  });
  afterAll((done) => {
    mongoose.disconnect(done);
  });
  test('should have data in db', () => {
    model.findAll()
      .then((data) => {
        expect(data.length).toBe(10);
      })
      .catch((err) => {
        if (err) throw err;
      });
  });
  test('should be able to query reviews for specific restaurant id', () => {
    model.findAll({ restaurant_id: 1 })
      .then((data) => {
        expect(data.length).toBe(5);
        expect(data[0].restaurant_id).toBe(1);
      })
      .catch((err) => {
        if (err) throw err;
      });
  });

  test('should return distinct restaurant IDs', () => {
    model.distinctValues('restaurant_id')
      .then((data) => {
        expect(data).toEqual([1, 2]);
      })
      .catch((err) => {
        if (err) throw err;
      });
  });
});
