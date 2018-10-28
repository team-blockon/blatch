import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as EmrAPI from 'lib/api/emr';
import moment from 'moment';
import BackButton from 'components/common/BackButton';
import SearchIcon from 'static/images/icon/search.svg';
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
  constructor(props) {
    super(props);
    this.state = {
      patientList: [],
      inputValue: '',
      searchedPatient: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  componentDidMount() {
    EmrAPI.getEmr().then(res => {
      this.setState({
        patientList: res.data
      });
    });
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  keyPress(e) {
    if (e.keyCode === 13) {
      this.setState({
        searchedPatient: this.state.patientList.filter(patient => {
          // 이름이나 생년월일이 일치하면 true
          return (
            patient.name === this.state.inputValue ||
            patient.birth === this.state.inputValue
          );
        })
      });
    }
  }

  render() {
    const { searchedPatient } = this.state;
    const { inputValue } = this.state;

    return (
      <div className="searchContainer">
        <BackButton />
        <div className="input-addon">
          <img src={SearchIcon} alt="search" />
          <input
            className="searchBar"
            type={'text'}
            placeholder={'Record search by name, birth'}
            value={inputValue}
            onKeyDown={this.keyPress}
            onChange={this.handleChange}
          />
        </div>
        <div className="searchResultContainer">
          <SearchResultHeader />
          {searchedPatient.map((patient, index) => {
            return <SearchResult data={patient} index={index} key={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default SearchTemplate;
