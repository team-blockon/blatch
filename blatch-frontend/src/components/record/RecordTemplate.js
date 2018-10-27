import React from 'react';
import './RecordTemplate.scss';
import Logo from 'static/images/logo.svg';

const SmallVideo = ({ location, isActive, video }) => {
  return (
    <div className="videoContainer">
      <div className="videoHeader">
        <div>{location}</div>
        <div>{isActive ? '빨간색' : '초록색'}</div>
      </div>
      <video>비디오</video>
    </div>
  );
};

const MainVideo = ({ video }) => {
  return (
    <div className="mainVideoContainer">
      <video>비디오</video>
    </div>
  );
};

const RecordTemplate = () => {
  return (
    <div className="recordContainer">
      <div className="sideBar">
        <div className="sideBar-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="sideBar-menuContainer">
          <div className="sideBar-menu">
            <text>New Record</text>
          </div>
          <div className="sideBar-menu">
            <text>Record</text>
          </div>
          <div className="sideBar-menu">
            <text>Authentication</text>
          </div>
        </div>
      </div>
      <div className="recordDashBoardSizer">
        <div className="recordDashBoard">
          <div className="boardWithTitle">
            <div className="recordDashBoard-title">
              <text>Record</text>
            </div>
            <SmallVideo location="수술실" isActive />
          </div>
          <MainVideo />
          <SmallVideo location="외상수술실" />
          <SmallVideo location="외래수술실" />
          <SmallVideo location="통원수술실" />
        </div>
      </div>
    </div>
  );
};

export default RecordTemplate;
