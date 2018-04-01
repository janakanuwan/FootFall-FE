import {logoutUser} from "./userActions";

describe('userActions', () => {
  it('should create an action for user logout', () => {
    expect(logoutUser(1)).toMatchSnapshot();
  });
});


