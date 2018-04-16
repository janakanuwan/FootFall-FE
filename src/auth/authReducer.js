import { createReducer } from 'redux-create-reducer';

import { Maybe, Record, User } from 'Models';
import { LOGOUT_USER, SET_USER } from '../const/action-types';

const initialState = Record({
  user: Maybe(User),
}, 'AuthState')();

const authReducer = createReducer(initialState, {
  [LOGOUT_USER](state, action) {
    // FIXME
    console.log(action, ' - ', state);
    return state.remove('user');
  },

  [SET_USER](state, action) {
    // FIXME
    console.log(action, ' - ', state);

    if (!action.error) {
      const user = User(action.payload.user);
      return state.set('user', user);
    }

    return state;
  },

});

export default authReducer;
