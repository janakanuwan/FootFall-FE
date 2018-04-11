import { loginUser, logoutUser } from './authActions';

describe('userActions', () => {
  it('should create an action for user logout', () => {
    expect(logoutUser(1)).toMatchSnapshot();
  });

  it('should create an action for user login request', () => {
    expect(loginUser({ email: 'hello@test.com', password: '1234', rememberMe: true })).toMatchSnapshot();
  });
});

