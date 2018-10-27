import React from 'react';
import './LoadingTemplate.scss';

const LoadingTemplate = () => {
  return (
    <div className="loadingContainer">
      <text>
        Wait a second...
        <br />
      </text>
      <text>We are uploading the file</text>
    </div>
  );
};

export default LoadingTemplate;
