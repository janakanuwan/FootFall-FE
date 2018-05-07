import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './app/store';

import Routes from './app/Routes';

import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';

const muiTheme = createMuiTheme({
  palette: {
    // type: 'dark',
    // background: '#EEE',
  },
  overrides: {},
});

ReactDOM.render(
  <div>
    <Provider store={store}>
      <MuiThemeProvider theme={muiTheme}>
        <Routes />
      </MuiThemeProvider>
    </Provider>
  </div>,
  document.getElementById('root'),
);


window.store = store;
