/* eslint-env jest */
const request = require('request');

describe('server tests', () => {
  it('should return expected response for /restaurants', () => {
    request.get('http://localhost:8000/restaurants', (err, response) => {
      if (err) throw err;
      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.body)).toEqual([1, 2]);
    });
  });

  it('should return expected response for /restaurants/1/reviews', () => {
    request.get('http://localhost:8000/restaurants/1/reviews', (err, response) => {
      if (err) throw err;
      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.body).length).toBe(10);
    });
  });

  it('should return expected response for /restaurants/1/reviews/1', () => {
    request.get('http://localhost:8000/restaurants/1/reviews/1', (err, response) => {
      if (err) throw err;
      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.body)[0].id).toBe(1);
    });
  });
});
