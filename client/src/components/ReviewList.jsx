import React from 'react';
import PropTypes from 'prop-types';
import ReviewListEntry from './ReviewListEntry';

const ReviewList = props => (
  <div>
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
