/* global fetch:true
   global document:true
*/

import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import moment from 'moment';
import './index.css';
import ReviewList from './components/ReviewList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      display: [],
      filters: {},
      filterNames: [],
    };
    this.getReviews();
    this.handleSortChange = this.handleSortChange.bind(this);
    this.handleFilterSelect = this.handleFilterSelect.bind(this);
  }

  getReviews() {
    this.get('http://localhost:8000/restaurants/1/reviews')
      .then((data) => {
        this.setState({
          reviews: data,
          display: data,
        });
        this.setFilters(data);
      })
      .catch((err) => {
        throw err;
      });
  }

  setFilters(reviews) {
    const filters = {};
    const filterNames = [];
    _.each(reviews, (review) => {
      _.each(review.keywords, (keyword) => {
        if (filters[keyword] === undefined) {
          filters[keyword] = false;
          filterNames.push(keyword);
        }
      });
    });
    this.setState({
      filters: filters,
      filterNames: filterNames,
    });
  }

  handleSortChange(value) {
    const reviewCopy = this.state.display.slice();
    if (value === 'newest') {
      reviewCopy.sort((a, b) => moment(b.date) - moment(a.date));
    }
    if (value === 'highest') {
      reviewCopy.sort((a, b) => b.stars - a.stars);
    }
    if (value === 'lowest') {
      reviewCopy.sort((a, b) => a.stars - b.stars);
    }
    this.setState({ display: reviewCopy });
  }

  get(url) {
    return fetch(url, {
      headers: {
        'content-type': 'application/json',
      },
      method: 'GET',
    })
      .then(response => response.json());
  }

  handleFilterSelect(value, checked) {
    let filteredReviews = [];
    const filteredReviewIds = [];
    const usedKeywords = [];
    let flag = false;

    if (checked) {
      this.state.filters[value] = true;
    } else {
      this.state.filters[value] = false;
    }

    _.each(Object.keys(this.state.filters), (key) => {
      if (this.state.filters[key]) {
        _.each(this.state.reviews, (review) => {
          if (_.indexOf(review.keywords, key) !== -1 &&
              _.indexOf(filteredReviewIds, review.id) === -1) {
            flag = true;
            filteredReviews.push(review);
            filteredReviewIds.push(review.id);
            _.each(review.keywords, (keyword) => {
              if (_.indexOf(usedKeywords, keyword) === -1) {
                usedKeywords.push(keyword);
              }
            });
            if (usedKeywords.length > review.keywords.length) {
              flag = 'no-matches';
            }
          }
        });
      }
    });

    if (!flag) {
      filteredReviews = this.state.reviews;
    } else if (flag === 'no-matches') {
      filteredReviews = [];
    }

    this.setState({
      display: filteredReviews,
      filters: this.state.filters,
    });
  }

  render() {
    return (
      <div className="container">
        <ReviewList
          display={this.state.display}
          filterNames={this.state.filterNames}
          handleSortChange={this.handleSortChange}
          handleFilterSelect={this.handleFilterSelect}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

