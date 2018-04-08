import {logoutUser} from "./authActions";

describe('userActions', () => {
  it('should create an action for user logout', () => {
    expect(logoutUser(1)).toMatchSnapshot();
  });
});


