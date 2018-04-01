import {createStore} from 'redux';
import {Map} from 'Models';

import dashboardReducer from '../dashboard/dashboardReducer';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';


const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

const initialState = Map();

const store = createStore(
  dashboardReducer,
  initialState,
  composeEnhancers()
);

export default store;
