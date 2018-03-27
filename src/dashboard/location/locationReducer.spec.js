import {changeLocation} from "./locationActions";
import locationReducer from "./locationReducer";

describe('locationReducer', () => {
  it('should change the location for empty selected location', () => {
    const initState = {};
    const action = changeLocation(1);
    const expected = {selectedLocation: 1};

    expect(locationReducer(initState, action)).toEqual(expected);
  });

  it('should change the location for non-empty selected location', () => {
    const initState = locationReducer({}, changeLocation(0));
    const action = changeLocation(1);
    const expected = {selectedLocation: 1};

    expect(locationReducer(initState, action)).toEqual(expected);
  });

  it('should not change the state for unsupported action', () => {
    const initState = locationReducer({}, changeLocation(0));
    const action = {type: 'UNSUPPORTED_ACTION_TYPE'};

    expect(locationReducer(initState, action)).toBe(initState);
  });
});
