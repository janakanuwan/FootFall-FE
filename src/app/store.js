import { applyMiddleware, createStore } from 'redux';
import { Map } from 'Models';

import rootReducer from './rootReducer';

import errorReportingMiddleware from './middleware/errorReportingMiddleware';
import userFlowMiddleware from './middleware/userFlowMiddleware';

import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';


const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

const initialState = Map();

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(
    userFlowMiddleware,
    errorReportingMiddleware,
  )),
);

export default store;
