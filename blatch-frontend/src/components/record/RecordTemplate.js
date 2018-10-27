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
import * as CaverBlatchAPI from 'lib/caver/blatch';

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
      {!!videoSrc ? (
        <video src={videoSrc} autoPlay />
      ) : (
        <div className="video" />
      )}
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

@inject('loading', 'blatch')
@observer
class RecordTemplate extends Component {
  state = {
    firstRoomIsActive: false,
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
    }, 1 * 30 * 1000); // 2분 30초
  }

  stopRecord() {
    if (!this.recordVideo) return;
    const { loading } = this.props;
    const { patient } = this.props.blatch;

    this.recordVideo.stopRecording(() => {
      const blob = this.recordVideo.getBlob();

      // convert BLOB to base64
      const reader = new FileReader();
      reader.readAsDataURL(blob);

      reader.onload = async () => {
        loading.startLoading();

        const { data } = await RecordAPI.saveVideo(reader.result);
        console.log(data);
        CaverBlatchAPI.saveVideo(1, data.videoHash, data.videoPath);

        setTimeout(() => {
          loading.stopLoading();
        }, 5000);
      };
    });

    this.setState({
      firstRoomIsActive: false,
      videoSrc: null
    });

    this.props.blatch.initialize();
  }

  componentDidMount() {
    const { patient, isAgree } = this.props.blatch;
    if (!!patient && isAgree) {
      this.requestUserMedia();
      this.startRecord();
      this.setState({
        ...this.state,
        firstRoomIsActive: true
      });
    }
  }

  render() {
    const { firstRoomIsActive, videoSrc } = this.state;

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
            <div className="sideBar-menu">
              <Link to="/authentication">Authentication</Link>
            </div>
          </div>
        </div>
        <div className="recordDashBoardSizer">
          <div className="recordDashBoard">
            <div className="boardWithTitle">
              <div className="recordDashBoard-title">Record</div>

              <SmallVideo
                location={'수술실'}
                isActive={firstRoomIsActive ? true : undefined}
                videoSrc={videoSrc}
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
