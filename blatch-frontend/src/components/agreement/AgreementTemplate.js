import React from 'react';
import Button from 'components/common/Button';
import CheckBox from 'components/common/CheckBox';
import './AgreementTemplate.scss';

const AgreementHeader = () => {
  return (
    <div className="agreementHeader">
      <text className="agreementHeader-title">Recording Agreement</text>
      <text>If you agree to record whole surgery then check the box .</text>
    </div>
  );
};

const AgreementBody = () => {
  return (
    <div className="agreementBody">
      <div className="agreementBody-detail">
        <text>
          Please read the following recording agreement . You must accept the
          terms to record before.
          <br />
          <br />
        </text>
        <text>
          - This record only used for verifying patient's comfort.
          <br />
        </text>
        <text>
          - The whole process of surgery will be recorded.
          <br />
        </text>
        <text>
          - Record will be updated to Blockchain, so it wouldn't be exposed to
          the forgery.
          <br />
        </text>
        <text>
          - You cannot use this record for personal usage.
          <br />
          <br />
        </text>
        <text>
          if you agree to the statement, please check the button. if you not,
          you cannot record the process.
        </text>
      </div>
      <div className="checkBoxContainers">
        <div className="checkBoxContainer">
          <CheckBox />
          <div className="checkBox-type">agree</div>
        </div>
        <div className="checkBoxContainer">
          <CheckBox />
          <div className="checkBox-type">disagree</div>
        </div>
      </div>
    </div>
  );
};

const AgreementTemplate = () => {
  return (
    <div className="agreementContainerSizer">
      <div className="agreementContainer">
        <AgreementHeader />
        <AgreementBody />
        <div className="buttonContainer">
          <Button value={'Record'} />
        </div>
      </div>
    </div>
  );
};

export default AgreementTemplate;
