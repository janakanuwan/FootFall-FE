import { combineReducers } from 'redux-immutable';
import merchantReducer from './merchant/merchantReducer';
import locationReducer from './location/locationReducer';
import dayCountReducer from './dayCount/dayCountReducer';
import graphCountReducer from './graphCount/graphCountReducer';

const dashboardReducer = combineReducers({
  merchants: merchantReducer,
  locations: locationReducer,
  dayCount: dayCountReducer,
  graphCount: graphCountReducer
});

export default dashboardReducer;
