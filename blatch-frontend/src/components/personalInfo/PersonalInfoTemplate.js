import React, { Component } from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames';
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
const InfoDivide = ({ type, value1, value2 }) => {
  return (
      <div className="infoDetail">
          <text className="infoDetail_type">{type}</text>
          <div className="infoDivide">
            <text className="infoDivide_value1">{value1}</text>
              <div className="infoDivide_center"> ~ </div>
            <text className="infoDivide_value2">{value2}</text>
          </div>
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

const InfoSummary = ({ activeIndex, index, summaryData, handleClick }) => {
  return (
    <div
      className={classNames('infoSummary', {
        active: activeIndex === index
      })}
      onClick={handleClick}
    >
      <text>{summaryData.patient_no}</text>
      <text>
        {summaryData.name}({summaryData.birth})
      </text>
      <text>
        {summaryData.surgery_type}/{summaryData.disease}
      </text>
    </div>
  );
};

const dummySummaryHeader = {
  date: 'Sunday, 28 Oct',
  hospital: 'Ajou University Hospital'
};

@observer
class PersonalInfoTemplate extends Component {
  state = {
    patientList: [],
    activePatientIndex: null
  };

  handleClick = index => {
    this.setState({
      ...this.state,
      activePatientIndex: index
    });
  };

  componentDidMount() {
    EmrAPI.getEmr().then(res => {
      this.setState({
        patientList: res.data,
        activePatientIndex: 0
      });
    });
  }

  render() {
    const { patientList, activePatientIndex } = this.state;
    const activePatient = patientList[activePatientIndex];

    return (
      <div className="personalInfoContainer">
        <div className="infoSummaryContainer">
          <InfoSummaryHeader data={dummySummaryHeader} />
          {patientList.map((patient, index) => {
            return (
              <InfoSummary
                activeIndex={activePatientIndex}
                index={index}
                summaryData={patient}
                handleClick={() => {
                  this.handleClick(index);
                }}
                key={index}
              />
            );
          })}
        </div>
        {!!activePatient && (
          <div className="infoDetailContainer">
            <InfoDetail
              className="infoDetail"
              type={'Disease'}
              value={activePatient.disease}
            />
            <InfoDetail
              className="infoDetail"
              type={'Surgery Type'}
              value={activePatient.surgery_type}
            />
            <InfoDetail
              className="infoDetail"
              type={'Doctor'}
              value={activePatient.doctor}
            />
            <InfoDivide
              className="infoDetail"
              type={'Surgery Date'}
              value1={activePatient.surgery_start}
              value2={activePatient.surgery_end}
            />
            <Button value={'Next'} />
          </div>
        )}
      </div>
    );
  }
}

export default PersonalInfoTemplate;
