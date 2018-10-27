import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'mobx-react';
import { LoadingStore, WalletStore, BlatchStore } from './stores';

const loading = new LoadingStore();
const wallet = new WalletStore();
const blatch = new BlatchStore();

ReactDOM.render(
  <Provider loading={loading} wallet={wallet} blatch={blatch}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
