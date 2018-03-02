/* global fetch:true
   global document:true
*/

import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';
import ReviewList from './components/ReviewList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
    this.getReviews();
    this.handleSortChange = this.handleSortChange.bind(this);
  }
  getReviews() {
    this.get('http://localhost:8000/restaurants/1/reviews')
      .then((data) => {
        this.setState({ reviews: data });
      })
      .catch((err) => {
        throw err;
      });
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

  handleSortChange(value) {
    const reviewCopy = this.state.reviews.slice();
    if (value === 'newest') {
      reviewCopy.sort((a, b) => moment(b.date) - moment(a.date));
    }
    if (value === 'highest') {
      reviewCopy.sort((a, b) => b.stars - a.stars);
    }
    if (value === 'lowest') {
      reviewCopy.sort((a, b) => a.stars - b.stars);
    }
    this.setState({ reviews: reviewCopy });
  }

  render() {
    return (
      <div className="container">
        <ReviewList
          reviews={this.state.reviews}
          handleSortChange={this.handleSortChange}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

