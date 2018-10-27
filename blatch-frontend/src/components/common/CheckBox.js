import React, { Component } from 'react';
import classNames from 'classnames';
import './CheckBox.scss';

class CheckBox extends Component {
  render() {
    const { handleAgree, type, activeType } = this.props;
    return (
      <button
        className={classNames('CheckBox', { active: activeType === type })}
        onClick={() => {
          handleAgree(type);
        }}
      >
        V
      </button>
    );
  }
}

export default CheckBox;
