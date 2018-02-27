const mongoose = require('mongoose');

const dbModel = require('../db/models/review.js');

describe('test if reviews db is populated and db model methods work as expected', () => {
  beforeAll(() => {
    mongoose.connect('mongodb://localhost/open_table_reviews');
  });
  afterAll((done) => {
    mongoose.disconnect(done);
  });
  test('should have data in db', () => {
    dbModel.findAll()
      .then((data) => {
        expect(data.length).toBe(5);
      })
      .catch((err) => {
        if (err) { throw err; }
      });
  });
  test('should be able to query reviews for specific restaurant id', () => {
    dbModel.findAll({restaurant_id: 1})
      .then((data) => {
        expect(data.length).toBe(5);
        expect(data[0].restaurant_id).toBe('1');
      })
      .catch((err) => {
        if (err) { throw err; }
      });
  });
});
