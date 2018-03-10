/* global window:true
*/

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import moment from 'moment';
import './index.css';
import get from './helpers/http';
import ReviewList from './components/ReviewList';

class ReviewApp extends React.Component {
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
    get(`/restaurants/${this.props.restaurantId}/reviews`)
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
      filters,
      filterNames,
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

  handleFilterSelect(value, checked) {
    const filteredReviews = [];
    const excludedReviewIds = {};

    if (checked) {
      this.state.filters[value] = true;
    } else {
      this.state.filters[value] = false;
    }

    const onFilters = _.filter(Object.keys(this.state.filters), key =>
      this.state.filters[key]);

    _.each(this.state.reviews, (review) => {
      _.each(onFilters, (filter) => {
        if (_.indexOf(review.keywords, filter) === -1 &&
            !excludedReviewIds[review.id]) {
          excludedReviewIds[review.id] = review.id;
        }
      });
      if (!excludedReviewIds[review.id]) {
        filteredReviews.push(review);
      }
    });

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

ReviewApp.defaultProps = {
  restaurantId: 1,
};

ReviewApp.propTypes = {
  restaurantId: PropTypes.number,
};

window.ReviewApp = ReviewApp;
export default ReviewApp;
