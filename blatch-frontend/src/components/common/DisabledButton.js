import React, { Component } from 'react';
import './DisabledButton.scss';

class DisabledButton extends Component {
  render() {
    const { value, ...rest } = this.props;
    return (
      <button className="Button DisabledButton" {...rest}>
        <span>{value}</span>
      </button>
    );
  }
}

export default DisabledButton;
