import { createAction } from 'redux-actions';
import { LOGIN_USER_REQUEST, LOGOUT_USER } from '../const/action-types';

const logoutUser = createAction(
  LOGOUT_USER,
  user => ({ user }),
);

const loginUser = createAction(
  LOGIN_USER_REQUEST,
  loginInfo => ({ loginInfo }),
);

export { logoutUser, loginUser };
