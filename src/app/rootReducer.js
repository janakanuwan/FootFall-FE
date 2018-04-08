import { combineReducers } from 'redux-immutable';

import authReducer from '../auth/authReducer';
import dashboardReducer from '../dashboard/dashboardReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
});

export default rootReducer;
