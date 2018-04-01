import {createReducer} from 'redux-create-reducer';

import {Maybe, Record, User} from 'Models';
import {LOGOUT_USER} from "../../const/action-types";

const initialState = Record({
  userInfo: Maybe(User)
}, 'UserState')();

const userReducer = createReducer(initialState, {
  [LOGOUT_USER](state, action) {
    // FIXME
    console.log(action, ' - ', state);
    return state;
  }
});

export default userReducer;
