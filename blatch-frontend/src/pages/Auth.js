import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { inject } from 'mobx-react';
import AuthTemplate from 'components/auth/AuthTemplate';

const Auth = inject('wallet')(({ wallet }) => {
  if (!!wallet.walletInstance) return <Redirect to="/counter" />;
  return <Route path="/auth/login" component={AuthTemplate} />;
});

export default Auth;
