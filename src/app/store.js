import {createStore} from 'redux';

import merchantReducer from "../dashboard/merchant/merchantReducer";

import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});


const store = createStore(
  merchantReducer,
  composeEnhancers()
);

export default store;
