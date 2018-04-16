import { combineReducers } from 'redux-immutable';

import authReducer from '../auth/authReducer';
import dashboardReducer from '../dashboard/dashboardReducer';
import overlayReducer from '../overlay/overlayReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
  overlay: overlayReducer,
});

export default rootReducer;
