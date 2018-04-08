import { changeLocation } from "./locationActions";
import reducer from "./locationReducer";

import { Location } from 'Models';

describe('reducer', () => {

  const initialState = reducer(undefined, { type: 'INIT' });

  const location1 = { id: 1, name: 'Location 1' };
  const location2 = { id: 2, name: 'Location 2' };

  it('should change the location for empty selected location', () => {
    const action = changeLocation(Location(location1));
    const expected = { list: [], selectedLocation: location1 };

    expect(reducer(initialState, action).toJS()).toEqual(expected);
  });

  it('should change the location for non-empty selected location', () => {
    const baseState = reducer(initialState, changeLocation(Location(location2)));
    const action = changeLocation(Location(location1));
    const expected = { list: [], selectedLocation: location1 };

    expect(reducer(baseState, action).toJS()).toEqual(expected);
  });

  it('should not change the state for unsupported action', () => {
    const action = { type: 'UNSUPPORTED_ACTION_TYPE' };

    expect(reducer(initialState, action)).toBe(initialState);
  });
});
