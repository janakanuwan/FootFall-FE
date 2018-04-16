import { createAction } from 'redux-actions';
import { LOGIN_USER, LOGOUT_USER } from '../const/action-types';
import userService from '../app/repository/userService';

const logoutUser = createAction(
  LOGOUT_USER,
  user => ({ user }),
);

const loginUserResponse = createAction(
  LOGIN_USER,
  loginResponse => loginResponse,
);

const loginUser = loginInfo => (dispatch) => {
  // dispatch({type: 'DISPLAY_LOADING_OVERLAY'});

  userService.getUser(loginInfo, res => dispatch(loginUserResponse(res)));
};


export { logoutUser, loginUser, loginUserResponse };
