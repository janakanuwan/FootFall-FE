import { fetchUser, logoutUser, setUser } from './authActions';

describe('userActions', () => {
  it('should create an action for user logout', () => {
    expect(logoutUser({ name: 'Hello', email: 'hello@gamil.com' })).toMatchSnapshot();
  });

  it('should create an action for set user', () => {
    expect(setUser({
      token: '1233',
      user: { email: 'hello@test.com', password: '1234', rememberMe: true }
    })).toMatchSnapshot();
  });

  it('should create an action for set failed user ', () => {
    const action = setUser(new Error('Invalid Email'));
    expect(action).toMatchSnapshot();
    expect(action.error).toEqual(true);
    expect(action.payload.message).not.toEqual(null);

  });

  it('should create an action for user login request', () => {
    expect(fetchUser({ email: 'hello@test.com', password: '1234', rememberMe: true })).toMatchSnapshot();
  });
});

