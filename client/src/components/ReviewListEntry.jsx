import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ReviewListEntry = (props) => {
  const {
    username, location, stars, text, date,
  } = props.review;

  const humanFriendlyTime = moment(date).format('MMMM Do, YYYY');

  const greyStars = 5 - stars;
  const starArray = [];
  for (let i = 0; i < stars; i += 1) {
    starArray.push(<div className="red-star" />);
  }
  for (let i = 0; i < greyStars; i += 1) {
    starArray.push(<div className="grey-star" />);
  }

  return (
    <div className="review">

      <div className="row">

        <div className="side">
          <div id="icon" />
        </div>

        <div className="main">
          <div className="col">
            { username } ({ location })
          </div>
          <div className="row">
            <div className="stars">
              {starArray.map(star => star)}
            </div>
            <div className="review-date">
              <span>{ stars.toFixed(1) }</span>
              <span> Dined { humanFriendlyTime }</span>
            </div>
          </div>
        </div>

      </div>

      <div className="row">
        { text }
      </div>

      <div className="row">
        <div className="report" />
        <div className="helpful-hover" />
      </div>

    </div>
  );
};

ReviewListEntry.defaultProps = {
  review: {},
};

ReviewListEntry.propTypes = {
  review: PropTypes.object,
};

export default ReviewListEntry;
