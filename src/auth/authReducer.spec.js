import reducer from './authReducer';
import { loginUser, logoutUser } from './authActions';
import { User } from 'Models';

describe('userReducer', () => {
  const initialState = reducer(undefined, { TYPE: 'INIT' });

  const user1 = User({ id: 1, email: 'hellotest@gmail.com', name: 'Hello Test' });

  it('should logout user who is logged in', () => {
    const baseState = initialState.set('user', user1);
    const action = logoutUser(user1);
    const expected = { user: null };

    expect(reducer(baseState, action).toJS()).toEqual(expected);
  });

  it('should login the user with given login info', () => {
    const action = loginUser({ email: 'hellotest@gmail.com', name: '1234', rememberMe: false });

    const expected = { user: { id: 1, name: 'Test User', email: 'hellotest@gmail.com', lastLoginTime: 0 } };
    expect(reducer(initialState, action).toJS()).toEqual(expected);
  });

  it('should not change the state for unknown actions', () => {
    const action = { type: 'UNSUPPORTED_ACTION_TYPE' };

    expect(reducer(initialState, action)).toBe(initialState);
  });
});
