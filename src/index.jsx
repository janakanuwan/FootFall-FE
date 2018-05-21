import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './app/store';

import Routes from './app/Routes';

import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import { CssBaseline } from 'material-ui';

/**
 * @see https://material-ui-next.com/customization/default-theme/
 * @type {Theme}
 */
const muiTheme = createMuiTheme({
  palette: {
    // type: 'dark',
    background: {
      paper: '#77C9D4',
      default: '#E0E0E0',
    },
  },
  typography: {
    fontFamily: [
      '"Droid Serif"',
      'Cambria',
      'Georgia',
      'Roboto',
      'Helvetica',
      'sans-serif',
      'Arial',
    ].join(','),
  },
});

ReactDOM.render(
  <div>
    <Provider store={store}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Routes />
      </MuiThemeProvider>
    </Provider>
  </div>,
  document.getElementById('root'),
);


window.store = store;
