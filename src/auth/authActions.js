import { createAction } from 'redux-actions';
import { LOGIN_USER, LOGOUT_USER } from '../const/action-types';
import userService from '../app/repository/userService';
import { hideOverlay, showOverlay } from '../overlay/overlayActions';
import OverlayData from '../app/models/OverlayData.model';

const logoutUser = createAction(
  LOGOUT_USER,
  user => ({ user }),
);

/**
 * DO NOT USE directly
 */
const loginUserResponse = createAction(
  LOGIN_USER,
  loginResponse => loginResponse,
);

const loginUser = loginInfo => (dispatch) => {
  const overlayData = OverlayData({ id: 'user_login', title: 'Loading...', message: 'Authenticating ..,.' });
  dispatch(showOverlay(overlayData));

  userService.getUser(loginInfo, (res) => {
    dispatch(loginUserResponse(res));
    dispatch(hideOverlay(overlayData));
  });
};


export { logoutUser, loginUser, loginUserResponse };
