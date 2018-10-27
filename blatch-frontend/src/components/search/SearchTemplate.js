import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as EmrAPI from 'lib/api/emr';
import moment from 'moment';
import BackButton from 'components/common/BackButton';
import './SearchTemplate.scss';

const SearchResultHeader = () => {
  return (
    <div className="rowContainer rowContainer-header">
      <text>No.</text>
      <text>Patient Name</text>
      <text>Birth</text>
      <text>Doctor</text>
      <text>Record time</text>
    </div>
  );
};

@withRouter
class SearchResult extends Component {
  handleRowClick = index => {
    this.props.history.push({
      pathname: '/check',
      state: { activeRow: index }
    });
  };

  render() {
    const { data, index } = this.props;
    const surgeryStart = new Date(data.surgery_start);
    const surgeryEnd = new Date(data.surgery_end);

    return (
      <div
        className="rowContainer rowContainer-body"
        onClick={() => {
          this.handleRowClick(index);
        }}
      >
        <text>{data.patient_no}</text>
        <text>{data.name}</text>
        <text>{data.birth}</text>
        <text>{data.doctor}</text>
        <text>
          {moment(surgeryStart).format('(YY-MM-DD) HH:mm')} -
          {moment(surgeryEnd).format('HH:mm')}
        </text>
      </div>
    );
  }
}

class SearchTemplate extends Component {
  state = {
    patientList: []
  };

  componentDidMount() {
    EmrAPI.getEmr().then(res => {
      this.setState({
        patientList: res.data
      });
    });
  }

  render() {
    const { patientList } = this.state;

    return (
      <div className="searchContainer">
        <BackButton />
        <input
          className="searchBar"
          type={'text'}
          placeholder={'Record search by name, birth'}
        />
        <div className="searchResultContainer">
          <SearchResultHeader />
          {patientList.map((patient, index) => {
            return <SearchResult data={patient} index={index} key={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default SearchTemplate;
