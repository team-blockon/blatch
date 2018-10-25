import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'mobx-react';
import { LoadingStore, WalletStore } from './stores';

const loading = new LoadingStore();
const wallet = new WalletStore();

ReactDOM.render(
  <Provider loading={loading} wallet={wallet}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
