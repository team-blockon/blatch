import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from 'components/common/Button';
import * as EmrAPI from 'lib/api/emr';
import CloseButton from 'components/common/CloseButton';
import './CheckTemplate.scss';

const CheckHeader = ({ isVerified }) => {
  return (
    <div className="checkHeaderContainer">
      <text className="verification">
        {isVerified ? 'Verified' : 'Unverified'}
      </text>
    </div>
  );
};

const CheckVideo = () => {
  return (
    <div className="checkVideoContainer">
      <video>비디오</video>
    </div>
  );
};

const PatientInfoSummary = ({ data }) => {
  return (
    <div className="patientInfoSummaryContainer">
      <text>
        [Patient Number] {data.patient_no}
        <br />
      </text>
      <text>
        [Name] {data.name}
        <br />
      </text>
      <text>
        [Birth] {data.birth}
        <br />
      </text>
      <text>
        [Disease] {data.disease}
        <br />
      </text>
      <text>
        [Doctor] {data.doctor}
        <br />
      </text>
    </div>
  );
};

const dummyDisease = {
  title: 'shoulder pain',
  content: [
    'disorder of shoulder because of sudden pressure when moving heavy product at fitness center.',
    'GS for EGC T1aNOMO s/p Subtotal gastrectomy B- 1 (13.10.29)',
    'URO for BPM'
  ]
};

const CheckBodyColumnTitle = ({ name }) => {
  return (
    <div className="checkBodyColumnTitleContainer">
      <text>{name}</text>
    </div>
  );
};

const DiseaseDetail = ({ data }) => {
  return (
    <div className="checkBodyColumnComponent">
      <CheckBodyColumnTitle name={'Disease'} />
      <div className="diseaseDetailContainer">
        <h3 className="medicalCheckup-column-title">
          {data.title}
          <br />
        </h3>
        {data.content.map(element => {
          return (
            <text>
              {element}
              <br />
            </text>
          );
        })}
      </div>
    </div>
  );
};

const dummyCheckup = {
  left: {
    title: 'Shoulder pain',
    content: [
      'prom: Flexion(182/)',
      'E/R - Adduction(180/)',
      'E/R - Adduction(90/)',
      'I/R(60/0)'
    ]
  },
  right: {
    title: 'Provocation',
    content: ['Neer test(+ /)', 'Drop arm sign(+ /)', 'full thickness tear']
  }
};

const MedicalCheckupColumn = ({ data }) => {
  return (
    <div className="medicalCheckup-column">
      <h3 className="medicalCheckup-column-title">
        {data.title}
        <br />
      </h3>
      {data.content.map(element => {
        return (
          <text>
            {element}
            <br />
          </text>
        );
      })}
    </div>
  );
};

const MedicalCheckup = ({ data }) => {
  return (
    <div className="checkBodyColumnComponent">
      <CheckBodyColumnTitle name={'Medical Checkup'} />
      <div className="medicalCheckupContainer">
        <MedicalCheckupColumn data={data.left} />
        <MedicalCheckupColumn data={data.right} />
      </div>
    </div>
  );
};

@withRouter
class CheckTemplate extends Component {
  state = {
    activePatient: []
  };

  async componentDidMount() {
    const locationState = this.props.location.state;
    if (!localStorage) return;

    const activeRow = locationState.activeRow;

    EmrAPI.getEmr().then(res => {
      this.setState({
        ...this.state,
        activePatient: res.data[activeRow]
      });
    });
  }

  render() {
    const { activePatient } = this.state;

    return (
      <div className="checkContainer">
        <CloseButton />
        <CheckHeader isVerified />
        <div className="checkBody">
          <div className="checkBody-column">
            <CheckVideo />
            {!!activePatient && <PatientInfoSummary data={activePatient} />}
          </div>
          <div className="checkBody-column">
            <DiseaseDetail data={dummyDisease} />
            <MedicalCheckup data={dummyCheckup} />
          </div>
        </div>
        <div className="buttonContainer">
          <Button value={'Download'} />
        </div>
      </div>
    );
  }
}

export default CheckTemplate;
