import React, { Component } from 'react';
import Button from 'components/common/Button';
import * as EmrAPI from 'lib/api/emr';
import './PersonalInfoTemplate.scss';

const InfoDetail = ({ type, value }) => {
  return (
    <div className="infoDetail">
      <text className="infoDetail_type">{type}</text>
      <text className="infoDetail_value">{value}</text>
    </div>
  );
};

const InfoSummaryHeader = ({ data }) => {
  return (
    <div className="infoSummary infoSummaryHeader">
      <span>메뉴마크</span>
      <text className="infoSummaryHeader_date">{data.date}</text>
      <text className="infoSummaryHeader_hospital">{data.hospital}</text>
    </div>
  );
};

const InfoSummary = ({ summaryData }) => {
  return (
    <div className="infoSummary">
      <text>{summaryData.surgeryNumber}</text>
      <text>
        {summaryData.patientName}({summaryData.patientBirth})
      </text>
      <text>
        REH/
        {summaryData.surgeonName}
      </text>
    </div>
  );
};

const dummySummaryHeader = {
  date: 'Sunday, 28 Oct',
  hospital: 'Ajou University Hospital'
};

const dummySummary = {
  surgeryNumber: 28695847,
  patientName: '김민영',
  patientBirth: '91.07.05',
  surgeonName: '김상준'
};

class PersonalInfoTemplate extends Component {
  componentDidMount() {
    EmrAPI.getEmr()
      .then(res => {
        console.log(res);
      })
      .catch(() => {});
  }

  render() {
    return (
      <div className="personalInfoContainer">
        <div className="infoSummaryContainer">
          <InfoSummaryHeader data={dummySummaryHeader} />
          <InfoSummary summaryData={dummySummary} />
          <InfoSummary summaryData={dummySummary} />
          <InfoSummary summaryData={dummySummary} />
          <InfoSummary summaryData={dummySummary} />
          <InfoSummary summaryData={dummySummary} />
          <InfoSummary summaryData={dummySummary} />
          <InfoSummary summaryData={dummySummary} />
          <InfoSummary summaryData={dummySummary} />
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
            type={'Surgery Date'}
            value={'Some value'}
          />
          <Button value={'Next'} />
        </div>
      </div>
    );
  }
}

export default PersonalInfoTemplate;
