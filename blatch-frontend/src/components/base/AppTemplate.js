import React, { Component, Fragment } from 'react';
import { inject } from 'mobx-react';
import Loading from 'components/common/Loading';

import './AppTemplate.scss';

@inject(stores => ({
  isLoading: stores.loading.isLoading
}))
class AppTemplate extends Component {
  handleLogout = () => {
    this.props.removeWallet();
  };

  render() {
    const { isLoading, children } = this.props;

    return (
      <Fragment>
        {children}
        {isLoading && <Loading />}
      </Fragment>
    );
  }
}

export default AppTemplate;
