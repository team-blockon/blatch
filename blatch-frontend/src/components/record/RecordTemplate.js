import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './RecordTemplate.scss';
import Logo from 'static/images/logo.svg';

const SmallVideo = ({ location, isActive, videoSrc }) => {
  return (
    <div className="videoContainer">
      <div className="videoHeader">
        <div>{location}</div>
        <div>{isActive ? '빨간색' : '초록색'}</div>
      </div>
      <video src={videoSrc} autoPlay />
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

@observer
class RecordTemplate extends Component {
  state = {
    videoSrc: null
  };

  handleVideo = stream => {
    this.setState({
      videoSrc: window.URL.createObjectURL(stream)
    });
  };

  componentDidMount() {
    const mediaOptions = { video: true };

    navigator.getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia;

    navigator.getUserMedia(mediaOptions, this.handleVideo, e => {
      console.log(e);
    });
  }

  render() {
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
              <SmallVideo
                location={'수술실'}
                isActive
                videoSrc={this.state.videoSrc}
              />
            </div>
            <MainVideo />
            <SmallVideo location={'외상수술실'} />
            <SmallVideo location={'외래수술실'} />
            <SmallVideo location={'통원수술실'} />
          </div>
        </div>
      </div>
    );
  }
}

export default RecordTemplate;
