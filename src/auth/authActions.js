import { createAction } from 'redux-actions';
import { FETCH_USER, LOGOUT_USER, SET_USER } from '../const/action-types';

const logoutUser = createAction(
  LOGOUT_USER,
  user => ({ user }),
);

const setUser = createAction(
  SET_USER,
  userResponse => userResponse,
);

const fetchUser = createAction(
  FETCH_USER,
  loginInfo => loginInfo,
);

export { logoutUser, fetchUser, setUser };
