import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import * as CaverWalletAPI from 'lib/caver/wallet';
import Login from './Login';

@inject(stores => ({
  walletInstance: stores.wallet.walletInstance,
  integrateWallet: stores.wallet.integrateWallet
}))
@observer
class AuthTemplate extends Component {
  state = {
    keystore: null,
    keystoreMsg: '',
    walletPw: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleImport = e => {
    const keystore = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = ({ target }) => {
      this.setState({
        keystore: target.result
      });
    };
    fileReader.readAsText(keystore);
  };

  handleLogin = e => {
    e.preventDefault();

    const { keystore, walletPw } = this.state;
    const { integrateWallet } = this.props;

    try {
      // keystore에서 프라이빗 키를 가져와서 지갑 인스턴스 생성
      const { privateKey: privateKeyFromKeystore } = CaverWalletAPI.decrypt(
        keystore,
        walletPw
      );
      integrateWallet(privateKeyFromKeystore);
    } catch (e) {
      this.setState({ keystoreMsg: '비밀번호가 일치하지 않습니다.' });
    }
  };

  render() {
    const { keystoreMsg, walletFile, walletPw } = this.state;
    const { walletInstance } = this.props;

    return !walletInstance ? (
      <Login
        handleChange={this.handleChange}
        handleImport={this.handleImport}
        handleLogin={this.handleLogin}
        keystoreMsg={keystoreMsg}
        walletFile={walletFile}
        walletPw={walletPw}
      />
    ) : null;
  }
}

export default AuthTemplate;