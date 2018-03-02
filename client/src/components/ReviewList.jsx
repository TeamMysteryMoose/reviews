import React from 'react';
import PropTypes from 'prop-types';
import ReviewListEntry from './ReviewListEntry';
import DropDown from './DropDown';
import Filter from './Filter';

const ReviewList = props => (
  <div className="review-list">

    <div className="reviews-sort">
      <div>Sort by</div>
      <DropDown handleSortChange={props.handleSortChange} />
    </div>

    <div className="review-filters">
      <div className="review-filters-title">Filters</div>
      {props.filterNames.map((filter) =>
        <Filter
          filter={filter}
          id={filter}
          handleFilterSelect={props.handleFilterSelect}
        />
      )}
    </div>

    {props.display.map(review =>
      <ReviewListEntry review={review} />)}
  </div>
);

ReviewList.defaultProps = {
  display: [{}],
  filterNames: ['filter'],
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
