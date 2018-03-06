import React from 'react';
import PropTypes from 'prop-types';
import ReviewListEntry from './ReviewListEntry';
import Sort from './Sort';
import Filter from './Filter';

const ReviewList = props => (
  <div className="review-list">

    <div className="reviews-sort">
      <div>Sort by</div>
      <Sort handleSortChange={props.handleSortChange} />
    </div>

    <div className="review-filters">
      <div className="review-filters-title">Filters</div>
      {props.filterNames.map(filter =>
        (<Filter
          filter={filter}
          id={filter}
          handleFilterSelect={props.handleFilterSelect}
          key={filter}
        />))}
    </div>

    {props.display.map(review =>
      <ReviewListEntry review={review} key={review.id} />)}
  </div>
);

ReviewList.defaultProps = {
  display: [
    {
      id: 1,
      restaurant_id: 1,
      food: 5,
      ambience: 5,
      service: 5,
      value: 5,
      stars: 5,
      username: 'OpenTable Diner',
      userid: null,
      date: '2018-02-25T16:00:00Z',
      text: 'This place has food',
      location: 'New York, NY',
      tags: ['food', 'cheap'],
      keywords: ['steak', 'salad'],
    },
  ],
  filterNames: ['steak'],
  handleSortChange: () => {},
  handleFilterSelect: () => {},
};

ReviewList.propTypes = {
  display: PropTypes.arrayOf(PropTypes.object),
  filterNames: PropTypes.arrayOf(PropTypes.string),
  handleSortChange: PropTypes.func,
  handleFilterSelect: PropTypes.func,
};

export default ReviewList;
