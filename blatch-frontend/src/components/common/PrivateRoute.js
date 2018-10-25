import React from 'react';
import { inject } from 'mobx-react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = inject('wallet')(
  ({ wallet, component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props =>
          !!wallet.walletInstance || !!sessionStorage.walletInstance ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/auth/login',
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
);

export default PrivateRoute;
