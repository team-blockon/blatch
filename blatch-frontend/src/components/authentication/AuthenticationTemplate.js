import React from 'react';
import Button from 'components/common/Button';
import LockIcon from 'static/images/lockicon.svg';
import UnlockIcon from 'static/images/unlockicon.svg';
import './AuthenticationTemplate.scss';

const AuthenticationTemplate = () => {
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
          type={'text'}
          placeholder={'wallet file'}
        />
        <input
          className="authInput"
          type={'text'}
          placeholder={'wallet password'}
        />
        <Button value={'Authentication'} />
      </div>
    </div>
  );
};

export default AuthenticationTemplate;
