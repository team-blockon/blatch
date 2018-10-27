import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
  render() {
    const { value, ...rest } = this.props;
    return (
      <button className="Button" {...rest}>
        {value}
      </button>
    );
  }
}

export default Button;
