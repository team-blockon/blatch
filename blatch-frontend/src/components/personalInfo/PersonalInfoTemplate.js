import React from 'react';
import Button from 'components/common/Button';
import './PersonalInfoTemplate.scss';

const InfoDetail = ({ type, value }) => {
  return (
    <div className="infoDetail">
      <text className="infoDetail_type">{type}</text>
      <text className="infoDetail_value">{value}</text>
    </div>
  );
};

const RecordTemplate = () => {
  return (
    <div className="personalInfoContainer">
      <div className="infoSummaryContainer">
        <div className="infoSummary">info</div>
        <div className="infoSummary">info</div>
      </div>
      <div className="infoDetailContainer">
        <InfoDetail
          className="infoDetail"
          type={'Disease'}
          value={'Some value'}
        />
        <InfoDetail
          className="infoDetail"
          type={'Surgery Type'}
          value={'Some value'}
        />
        <InfoDetail
          className="infoDetail"
          type={'Doctor'}
          value={'Some value'}
        />
        <InfoDetail
          className="infoDetail"
          type={'Surgery'}
          value={'Some value'}
        />
        <Button value={'Next'} />
      </div>
    </div>
  );
};

export default RecordTemplate;
