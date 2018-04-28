import { combineReducers } from 'redux-immutable';

import merchantReducer from './merchant/merchantReducer';
import locationReducer from './location/locationReducer';
import entriesReducer from './entries/entriesReducer';
import graphCountReducer from './graphCount/graphCountReducer';

const dashboardReducer = combineReducers({
  merchants: merchantReducer,
  locations: locationReducer,
  entries: entriesReducer,
  graphCount: graphCountReducer,
});

export default dashboardReducer;
