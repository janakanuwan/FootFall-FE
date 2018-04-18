import { createReducer } from 'redux-create-reducer';

import { Maybe, Record, User } from 'Models';
import { LOGOUT_USER, SET_USER } from '../const/action-types';

const initialState = Record({
  user: Maybe(User),
  token: Maybe(String),
}, 'AuthState')();

const authReducer = createReducer(initialState, {
  [LOGOUT_USER](state) {
    // FIXME
    return state.remove('user').remove('token');
  },

  [SET_USER](state, action) {
    // FIXME
    if (!action.error) {
      const { user, token } = action.payload;
      return state.set('user', User(user)).set('token', token);
    }

    return state;
  },

});

export default authReducer;
