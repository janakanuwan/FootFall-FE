import { loginUser, loginUserResponse, logoutUser } from './authActions';

describe('userActions', () => {
  it('should create an action for user logout', () => {
    expect(logoutUser({ name: 'Hello', email: 'hello@gamil.com' })).toMatchSnapshot();
  });

  [
    { token: '1233', user: { email: 'hello@test.com', password: '1234', rememberMe: true } },
    new Error('Invalid Email'),
  ].map((response) => {
    it(`should create an action for user login response '${response}'`, () => {
      const result = loginUserResponse(response);
      expect(result).toMatchSnapshot();
      if (response instanceof Error) {
        expect(result.error).toEqual(true);
        expect(result.payload.message).not.toEqual(null);
      }
    });
  });

  it('should create an action for user login request', () => {
    expect(loginUser({ email: 'hello@test.com', password: '1234', rememberMe: true })).toMatchSnapshot();
  });
});

