import {combineReducers} from 'redux';
import merchantReducer from "./merchant/merchantReducer";
import locationReducer from "./location/locationReducer";

const dashboardReducer = combineReducers({
  merchants: merchantReducer,
  locations: locationReducer
});

export default dashboardReducer;
