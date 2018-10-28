import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import Button from 'components/common/Button';
import LockIcon from 'static/images/icon/lock.svg';
import UnlockIcon from 'static/images/icon/unlock.svg';
import { inject } from 'mobx-react';
import * as CaverWalletAPI from 'lib/caver/wallet';
import './AuthenticationTemplate.scss';

@withRouter
@inject(stores => ({
  integrateWallet: stores.wallet.integrateWallet
}))
class AuthenticationTemplate extends Component {
  state = {
    keystore: null,
    keystoreMsg: '',
    walletPw: '',
    fileLabel: 'wallet file',
    redirectToReferrer: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleImport = e => {
    const keystore = e.target.files[0];
    this.setState({
      ...this.state,
      fileLabel: keystore.name
    });
    const fileReader = new FileReader();
    fileReader.onload = ({ target }) => {
      this.setState({
        ...this.state,
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
      this.setState({ ...this.state, redirectToReferrer: true });
    } catch (e) {
      this.setState({
        ...this.state,
        keystoreMsg: '비밀번호가 일치하지 않습니다.'
      });
    }
  };

  render() {
    const { keystoreMsg, walletPw, fileLabel } = this.state;
    const { from } = this.props.location.state || {
      from: { pathname: '/search' }
    };

    if (this.state.redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div className="authenticationContainerSizer">
        <div className="authenticationContainer">
          <div className="authenticationIcon">
            <img src={LockIcon} alt="lock" />
          </div>
          <text className="authenticationTitle">Protected Page</text>
          <text className="authenticationSubtitle">
            Please enter your personal ID to continue.
          </text>
          <form onSubmit={this.handleLogin}>
            <input
              className="authInput"
              name="walletFile"
              type={'file'}
              id="file"
              placeholder={'wallet file'}
              onChange={this.handleImport}
            />
            <label htmlFor="file">{fileLabel}</label>
            <input
              className="authInput"
              name="walletPw"
              value={walletPw}
              type={'password'}
              placeholder={'wallet password'}
              onChange={this.handleChange}
            />
            <div className="form-control">
              <div className="keystore">{keystoreMsg}</div>
              <Button value={'Authentication'} type="submit" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AuthenticationTemplate;
