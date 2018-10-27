import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import './Loading.scss';

class Loading extends Component {
  render() {
    return (
      <Box className="Loading" align="center" justify="center">
        <div className="loader" />
        <div className="loadingText">
          <div className="title">Wait a second...</div>
          We are uploading the file
        </div>
      </Box>
    );
  }
}

export default Loading;
