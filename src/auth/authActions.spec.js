import { fetchUser, logoutUser, setUser } from './authActions';

describe('userActions', () => {
  it('should create an action for user logout', () => {
    expect(logoutUser({ name: 'Hello', email: 'hello@gamil.com' })).toMatchSnapshot();
  });

  [
    { token: '1233', user: { email: 'hello@test.com', password: '1234', rememberMe: true } },
    new Error('Invalid Email'),
  ].map((response) => {
    it(`should create an action for set user '${response}'`, () => {
      const result = setUser(response);
      expect(result).toMatchSnapshot();
      if (response instanceof Error) {
        expect(result.error).toEqual(true);
        expect(result.payload.message).not.toEqual(null);
      }
    });
  });

  it('should create an action for user login request', () => {
    expect(fetchUser({ email: 'hello@test.com', password: '1234', rememberMe: true })).toMatchSnapshot();
  });
});

