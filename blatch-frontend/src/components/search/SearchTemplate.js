import React from 'react';
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

const SearchResult = ({ data }) => {
  return (
    <div className="rowContainer rowContainer-body">
      <text>{data.no}</text>
      <text>{data.patientName}</text>
      <text>{data.birth}</text>
      <text>{data.doctor}</text>
      <text>{data.recordTime}</text>
    </div>
  );
};

const dummyResult = {
  no: 28695847,
  patientName: '김민영',
  birth: '91.07.06',
  doctor: 'REH/김상준',
  recordTime: '(18.06.07)17:05 - 19:07'
};

const SearchTemplate = () => {
  return (
    <div className="searchContainer">
      <input
        className="searchBar"
        type={'text'}
        placeholder={'Record search by name, birth'}
      />
      <div className="searchResultContainer">
        <SearchResultHeader />
        <SearchResult data={dummyResult} />
        <SearchResult data={dummyResult} />
        <SearchResult data={dummyResult} />
        <SearchResult data={dummyResult} />
        <SearchResult data={dummyResult} />
      </div>
    </div>
  );
};

export default SearchTemplate;
