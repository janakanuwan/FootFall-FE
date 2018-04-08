import { createReducer } from 'redux-create-reducer';

import { Maybe, Record, User } from 'Models';
import { LOGIN_USER_REQUEST, LOGOUT_USER } from "../const/action-types";

const initialState = Record({
  user: Maybe(User)
}, 'AuthState')();

const authReducer = createReducer(initialState, {
  [LOGOUT_USER](state, action) {
    // FIXME
    console.log(action, ' - ', state);
    return state.remove('user');
  },

  [LOGIN_USER_REQUEST](state, action) {
    // FIXME
    console.log(action, ' - ', state);
    const user = User({
      id: 1,
      userEmail: action.payload.loginInfo.userEmail,
      userName: 'Test User'
    });
    return state.set('user', user);
  }

});

export default authReducer;
