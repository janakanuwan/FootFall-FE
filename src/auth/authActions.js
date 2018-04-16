import { createAction } from 'redux-actions';
import { LOGOUT_USER, SET_USER } from '../const/action-types';
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
const setUser = createAction(
  SET_USER,
  userResponse => userResponse,
);

const fetchUser = loginInfo => (dispatch) => {
  const overlayData = OverlayData({ id: 'user_login', title: 'Loading...', message: 'Authenticating ..,.' });
  dispatch(showOverlay(overlayData));

  userService.fetchUser(loginInfo, (res) => {
    dispatch(setUser(res));
    dispatch(hideOverlay(overlayData));
  });
};


export { logoutUser, fetchUser, setUser };
