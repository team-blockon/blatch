import React, { Component } from 'react';
import CreateWallet from './CreateWallet';
import GetWallet from './GetWallet';
import * as CaverWalletAPI from 'lib/caver/wallet';

class WalletTemplate extends Component {
  state = {
    step: 'create',
    walletPw: ''
  };

  getStepContent = () => {
    const { step, walletPw } = this.state;

    switch (step) {
    case 'create':
      return (
        <CreateWallet
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          walletPw={walletPw}
        />
      );
    case 'get':
      return <GetWallet getWalletJson={this.getWalletJson} />;
    default:
      return 'Invalid step';
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      step: 'get'
    });
  };

  getWalletJson = () => {
    CaverWalletAPI.createWallet();
    const keystoreJson = CaverWalletAPI.encrypt(this.state.walletPw);
    return JSON.stringify(keystoreJson[0]);
  };

  render() {
    return this.getStepContent();
  }
}

export default WalletTemplate;
