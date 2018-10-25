import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import './Loading.scss';

class Loading extends Component {
  render() {
    return (
      <Box className="Loading" align="center" justify="center">
        <div className="loader" />
        <div className="loadingText">
          <div className="title">잠시만 기다려 주세요.</div>
          데이터를 안전하게 저장하는 중입니다.
        </div>
      </Box>
    );
  }
}

export default Loading;
