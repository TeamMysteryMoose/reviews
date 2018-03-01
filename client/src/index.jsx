/* global fetch:true
   global document:true
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReviewList from './components/ReviewList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
    this.getReviews();
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

  render() {
    return (
      <div>
        <ReviewList reviews={this.state.reviews} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

