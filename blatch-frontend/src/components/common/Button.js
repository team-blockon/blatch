import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
  render() {
    return <button className="Button">{this.props.value}</button>;
  }
}

export default Button;
