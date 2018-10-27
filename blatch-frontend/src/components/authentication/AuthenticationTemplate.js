import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from 'components/common/Button';
import LockIcon from 'static/images/lockicon.svg';
import UnlockIcon from 'static/images/unlockicon.svg';
import './AuthenticationTemplate.scss';

@withRouter
class AuthenticationTemplate extends Component {
  handleClick = () => {
    this.props.history.push('/search');
  };

  render() {
    return (
      <div className="authenticationContainerSizer">
        <div className="authenticationContainer">
          <div className="authenticationIcon">
            <img src={LockIcon} alt="lock" />
          </div>
          <text className="authenticationTitle">Protected Page</text>
          <text className="authenticationSubtitle">
            Please enter your personal ID to continue.
          </text>
          <input
            className="authInput"
            type={'file'}
            id="file"
            placeholder={'wallet file'}
          />
          <label for="file">wallet file</label>
          <input
            className="authInput"
            type={'password'}
            placeholder={'wallet password'}
          />
          <Button value={'Authentication'} onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default AuthenticationTemplate;
