import {createStore} from 'redux';
import {Map} from 'Models';

import rootReducer from './rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';


const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

const initialState = Map();

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers()
);

export default store;
