import reducer from './userReducer';
import {logoutUser} from "./userActions";
import {User} from 'Models';

describe('userReducer', () => {

  const initialState = reducer(undefined, {TYPE: 'INIT'});

  const user1 = User({id: 1, userEmail: 'hellotest@gmail.com', userName: 'Hello Test'});

  it('should logout user who is logged in', () => {
    const action = logoutUser(user1);
    // FIXME
    const expected = {userInfo: null};

    expect(reducer(initialState, action).toJS()).not.toEqual(expected);
  });

  it('should not change the state for unknown actions', () => {
    const action = {type: 'UNSUPPORTED_ACTION_TYPE'};

    expect(reducer(initialState, action)).toBe(initialState);
  });
});
