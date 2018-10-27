import React from 'react';
import { Link } from 'react-router-dom';
import BackIcon from 'static/images/icon/back.svg';
import './BackButton.scss';

const BackButton = () => {
  return (
    <div className="BackButton">
      <Link to="/">
        <img src={BackIcon} alt="back" />
      </Link>
    </div>
  );
};

export default BackButton;
