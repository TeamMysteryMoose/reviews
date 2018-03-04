import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const createStarArray = (stars) => {
  const greyStars = 5 - stars;
  const starArray = [];
  for (let i = 0; i < stars; i += 1) {
    starArray.push(<div className="red-star" />);
  }
  for (let i = 0; i < greyStars; i += 1) {
    starArray.push(<div className="grey-star" />);
  }
  return starArray;
};

const createHumanFriendlyTime = (date) => {
  const a = moment();
  const b = moment(date);
  const dateDiff = a.diff(b, 'days');
  const humanFriendlyTime = (dateDiff >= 7) ? `on ${moment(date).format('MMMM Do, YYYY')}` : moment(date).fromNow();
  return humanFriendlyTime;
};

const ReviewListEntry = (props) => {
  const {
    username, location, stars, text, date,
  } = props.review;

  const humanFriendlyTime = createHumanFriendlyTime(date);
  const starArray = createStarArray(stars);

  return (
    <div className="review">
      <div className="row review-data">
        <div className="side">
          <div id="icon" />
        </div>
        <div className="main">
          <div className="col user-info">
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
      <div className="row review-text">
        { text }
      </div>
      <div className="row bottom-right">
        <div className="row report">
          <i className="report-icon" /> <div>Report</div>
        </div>
        <div className="row helpful">
          <i className="helpful-icon" /> <div>Helpful</div>
        </div>
      </div>
    </div>
  );
};

ReviewListEntry.defaultProps = {
  review: {
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
};

ReviewListEntry.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number,
    restaurant_id: PropTypes.number,
    food: PropTypes.number,
    ambience: PropTypes.number,
    service: PropTypes.number,
    value: PropTypes.number,
    stars: PropTypes.number,
    username: PropTypes.string,
    userid: PropTypes.number,
    date: PropTypes.string,
    text: PropTypes.string,
    location: PropTypes.string,
    tags: PropTypes.array,
    keywords: PropTypes.array,
  }),
};

export default ReviewListEntry;
