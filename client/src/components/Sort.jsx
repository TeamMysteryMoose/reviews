import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'newest',
      label: 'Newest',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.value,
      label: event.label,
    });
    this.props.handleSortChange(event.value);
  }

  render() {
    const options = [
      { value: 'newest', label: 'Newest' },
      { value: 'highest', label: 'Highest rating' },
      { value: 'lowest', label: 'Lowest rating' },
    ];
    return (
      <div>
        <Dropdown options={options} onChange={this.handleChange} value={this.state.label} placeholder="Select an option" />
      </div>
    );
  }
}

Sort.defaultProps = {
  handleSortChange: () => {},
};

Sort.propTypes = {
  handleSortChange: PropTypes.func,
};

export default Sort;
