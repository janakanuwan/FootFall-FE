import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './app/store';

import Routes from './app/Routes';

ReactDOM.render(
  <div>
    <Provider store={store}>
      <Routes />
    </Provider>
  </div>,
  document.getElementById('root'),
);


window.store = store;
