import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { captureUserMedia } from 'lib/utils';
import RecordRTC from 'recordrtc';
import * as RecordAPI from 'lib/api/record';
import './RecordTemplate.scss';
import Logo from 'static/images/logo.svg';
import Recording from 'static/images/recording.svg';
import NoRecording from 'static/images/no-recording.svg';

const SmallVideo = ({ location, isActive, videoSrc }) => {
  return (
    <div className="videoContainer">
      <div className="videoHeader">
        <div>{location}</div>
        <div className="status">
          {isActive ? (
            <img src={Recording} alt="recording" />
          ) : (
            <img src={NoRecording} alt="no-recording" />
          )}
        </div>
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

@inject('loading')
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

  requestUserMedia() {
    captureUserMedia(stream => {
      this.setState({ videoSrc: window.URL.createObjectURL(stream) });
    });
  }

  startRecord() {
    captureUserMedia(stream => {
      this.recordVideo = RecordRTC(stream, { type: 'video' });
      this.recordVideo.startRecording();
    });

    setTimeout(() => {
      this.stopRecord();
    }, 1 * 60 * 1000);
  }

  stopRecord() {
    const { loading } = this.props;

    this.recordVideo.stopRecording(() => {
      const blob = this.recordVideo.getBlob();

      // convert BLOB to base64
      const reader = new FileReader();
      reader.readAsDataURL(blob);

      reader.onload = async () => {
        loading.startLoading();
        await RecordAPI.saveVideo(reader.result);
        loading.stopLoading();
      };
    });
  }

  componentDidMount() {
    this.requestUserMedia();
    this.startRecord();
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
              <Link to="/personal-info">New Record</Link>
            </div>
            <div className="sideBar-menu active">
              <Link to="/">Record</Link>
            </div>
            <div className="sideBar-menu">Authentication</div>
          </div>
        </div>
        <div className="recordDashBoardSizer">
          <div className="recordDashBoard">
            <div className="boardWithTitle">
              <div className="recordDashBoard-title">Record</div>
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
