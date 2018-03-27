import {createStore} from 'redux';

import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

import dashboardReducer from '../dashboard/dashboardReducer';

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});


const store = createStore(
  dashboardReducer,
  composeEnhancers()
);

export default store;
