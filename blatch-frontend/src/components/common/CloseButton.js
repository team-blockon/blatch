import React from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from 'static/images/icon/close.svg';
import './CloseButton.scss';

const CloseButton = () => {
  return (
    <div className="CloseButton">
      <Link to="/">
        <img src={CloseIcon} alt="close" />
      </Link>
    </div>
  );
};

export default CloseButton;
