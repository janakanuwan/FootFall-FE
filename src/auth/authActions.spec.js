import {loginUser, logoutUser} from "./authActions";

describe('userActions', () => {
  it('should create an action for user logout', () => {
    expect(logoutUser(1)).toMatchSnapshot();
  });

  it('should create an action for user login request', () => {
    expect(loginUser({userEmail: 'hello@test.com', userPassword: '1234', rememberMe: true})).toMatchSnapshot();
  });
});


