import {changeLocation} from "./locationActions";

describe('locationActions', () => {
  it('should create an action for location change', () => {
    expect(changeLocation(1)).toMatchSnapshot();
  });
});
