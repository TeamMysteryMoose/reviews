import React from 'react';
import PropTypes from 'prop-types';
import ReviewListEntry from './ReviewListEntry';
import DropDown from './DropDown'

const ReviewList = props => (
  <div className="review-list">

    <div className="reviews-sort">
      <div>Sort by</div>
      <DropDown handleSortChange={props.handleSortChange} />
    </div>

    <div className="review-filters">
      <div>Filters</div>
    </div>

    {props.reviews.map(review =>
      <ReviewListEntry review={review} />)}
  </div>
);

ReviewList.defaultProps = {
  reviews: [{}],
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
};

export default ReviewList;
