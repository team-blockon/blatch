import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import classNames from 'classnames';
import Button from 'components/common/Button';
import * as EmrAPI from 'lib/api/emr';
import MenuIcon from 'static/images/icon/menu.svg';
import CloseButton from 'components/common/CloseButton';
import moment from 'moment';
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
      <img className="logo" src={MenuIcon} alt="menu" />
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
  date: moment(new Date()).format('dddd, DD MMM'),
  hospital: 'Ajou University Hospital'
};

@withRouter
@inject('blatch')
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

  handleNext = () => {
    const { patientList, activePatientIndex } = this.state;
    this.props.blatch.setPatient(patientList[activePatientIndex]);
    this.props.history.push('/agreement');
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
        <CloseButton />
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
            <Button value={'Next'} onClick={this.handleNext} />
          </div>
        )}
      </div>
    );
  }
}

export default PersonalInfoTemplate;
