import {combineReducers} from 'redux-immutable';
import merchantReducer from "./merchant/merchantReducer";
import locationReducer from "./location/locationReducer";
import userReducer from "./user/userReducer";
import dayCountReducer from "./dayCount/dayCountReducer";

const dashboardReducer = combineReducers({
  user: userReducer,
  merchants: merchantReducer,
  locations: locationReducer,
  dayCount: dayCountReducer
});

export default dashboardReducer;
