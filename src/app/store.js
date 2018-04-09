import { applyMiddleware, createStore } from 'redux';
import { Map } from 'Models';

import rootReducer from './rootReducer';

import errorReportingMiddleware from './middleware/errorReportingMiddleware';
import thunkMiddleware from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';


const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

const initialState = Map();

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(
    errorReportingMiddleware,
    thunkMiddleware,
  )),
);

export default store;
