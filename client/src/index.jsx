import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }
  getReviews() {
    this.get('http://localhost:8000/reviews')
      .then((data) => {
        this.setState({ reviews: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  get(url) {
    return fetch(url, {
      headers: {
        'content-type': 'application/json',
      },
      method: 'GET',
      })
        .then(response => response.json())
  }

  render() {
    return (
      <div>
        <h1>Reviews</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

