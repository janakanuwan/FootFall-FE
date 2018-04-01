import {combineReducers} from 'redux-immutable';
import merchantReducer from "./merchant/merchantReducer";
import locationReducer from "./location/locationReducer";
import userReducer from "./user/userReducer";

const dashboardReducer = combineReducers({
  user: userReducer,
  merchants: merchantReducer,
  locations: locationReducer
});

export default dashboardReducer;
