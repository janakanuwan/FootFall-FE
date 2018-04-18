import reducer from './authReducer';
import { logoutUser, setUser } from './authActions';
import { User } from 'Models';

describe('userReducer', () => {
  const initialState = reducer(undefined, { TYPE: 'INIT' });

  const user1 = User({ id: 1, email: 'hellotest@gmail.com', name: 'Hello Test', lastLoginTime: 1234 });

  it('should logout user who is logged in', () => {
    const baseState = initialState.set('user', user1);
    const action = logoutUser(user1);
    const expected = { user: null, token: null };

    expect(reducer(baseState, action).toJS()).toEqual(expected);
  });

  it('should login the user with login response', () => {
    const user = { id: 1, email: 'hellotest@gmail.com', name: 'Hello Test', lastLoginTime: 1234 };
    const token = '1234';
    const action = setUser({ user, token });

    const expected = { user, token };
    expect(reducer(initialState, action).toJS()).toEqual(expected);
  });

  it('should not change the state for unknown actions', () => {
    const action = { type: 'UNSUPPORTED_ACTION_TYPE' };

    expect(reducer(initialState, action)).toBe(initialState);
  });
});
