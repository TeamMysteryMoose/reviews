import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'newest' };
    this.state = { label: 'Newest' };
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

export default DropDown;
