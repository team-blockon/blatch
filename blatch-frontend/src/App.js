import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { inject } from 'mobx-react';
import AppTemplate from 'components/base/AppTemplate';
import PrivateRoute from 'components/common/PrivateRoute';
import DevTools from 'mobx-react-devtools';

import { Auth, Wallet, Counter } from 'pages';

@inject(stores => ({
  loadWallet: stores.wallet.loadWallet
}))
class App extends Component {
  componentDidMount() {
    const { loadWallet } = this.props;
    const walletFromSession = sessionStorage.getItem('walletInstance');

    if (walletFromSession) {
      loadWallet(JSON.parse(walletFromSession));
    }
  }
  render() {
    return (
      <AppTemplate>
        <Route path="/auth" component={Auth} />
        <Route path="/wallet" component={Wallet} />
        <PrivateRoute path="/counter" component={Counter} />
        {process.env.NODE_ENV === 'development' && <DevTools />}
      </AppTemplate>
    );
  }
}

export default App;
