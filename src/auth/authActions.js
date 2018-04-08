import {createAction} from 'redux-actions';
import {LOGOUT_USER} from "../const/action-types";

const logoutUser = createAction(
  LOGOUT_USER,
  (user) => ({user})
);

export {logoutUser};
