import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from 'components/common/Button';
import DisabledButton from 'components/common/DisabledButton';
import CheckBox from 'components/common/CheckBox';
import './AgreementTemplate.scss';
import { inject } from 'mobx-react';

const AgreementHeader = () => {
  return (
    <div className="agreementHeader">
      <text className="agreementHeader-title">Recording Agreement</text>
      <text>If you agree to record whole surgery then check the box .</text>
    </div>
  );
};

class AgreementBody extends Component {
  render() {
    const { handleAgree, activeType } = this.props;

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
            <CheckBox
              handleAgree={() => {
                handleAgree('agree');
              }}
              type="agree"
              activeType={activeType}
            />
            <div className="checkBox-type">agree</div>
          </div>
          <div className="checkBoxContainer">
            <CheckBox
              handleAgree={() => {
                handleAgree('disagree');
              }}
              type="disagree"
              activeType={activeType}
            />
            <div className="checkBox-type">disagree</div>
          </div>
        </div>
      </div>
    );
  }
}

@withRouter
@inject('blatch')
class AgreementTemplate extends Component {
  state = {
    activeType: null
  };

  handleAgree = type => {
    this.setState({
      activeType: type
    });
  };

  handleClick = () => {
    this.props.blatch.agreeRecord();
    this.props.history.push('/');
  };

  render() {
    const { activeType } = this.state;

    return (
      <div className="agreementContainerSizer">
        <div className="agreementContainer">
          <AgreementHeader />
          <AgreementBody
            handleAgree={this.handleAgree}
            activeType={this.state.activeType}
          />
          <div className="buttonContainer">
            {activeType !== 'disagree' ? (
              <Button value={'Record'} onClick={this.handleClick} />
            ) : (
              <DisabledButton value={'Record'} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default AgreementTemplate;
