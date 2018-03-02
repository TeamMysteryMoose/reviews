import React from 'react';
import PropTypes from 'prop-types';


class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.checked) {
      this.setState({value: event.target.value});
      this.props.handleFilterSelect(event.target.value, true);
    } else {
      this.setState({value: ''});
      this.props.handleFilterSelect(event.target.value, false);
    }
  }

  render() {
    const id = `review-filter-${this.props.id}`;
    return (
      <span>
        <input type="checkbox" id={id} onChange={this.handleChange} value={ this.props.filter }/>
        <label className="filter" htmlFor={id} >
          <span>{ this.props.filter }</span>
        </label>
      </span>
    );
  }
}

Filter.defaultProps = {
  filter: 'food',
  id: 'food',
};

Filter.propTypes = {
  filter: PropTypes.string,
  id: PropTypes.string,
};

export default Filter;
