import { addLocations, changeLocation } from './locationActions';
import reducer from './locationReducer';

import { Location, List } from 'Models';

describe('reducer', () => {
  const initialState = reducer(undefined, { type: 'INIT' });

  const location1 = { id: 1, name: 'Location 1', description: null, merchantId: 1, parentId: null };
  const location2 = { id: 2, name: 'Location 2', description: null, merchantId: 1, parentId: 1 };
  const location2_1 = { id: 2, name: 'Location 2_1', description: null, merchantId: 1, parentId: 1 };

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

  it('should add the new locations for empty list', () => {
    const action = addLocations(List(Location)().push(location1).push(location2));
    const expected = {list: [location1, location2], selectedLocation: null};

    expect(reducer(initialState, action).toJS()).toEqual(expected);
  });

  it('should add the new locations for non-empty list', () => {
    const baseState = reducer(initialState, addLocations(List(Location)().push(location2)));
    const action = addLocations(List(Location)().push(location1).push(location2_1));
    const expected = {list: [location1, location2_1], selectedLocation: null};

    expect(reducer(baseState, action).toJS()).toEqual(expected);
  });

  it('should not change the state for unsupported action', () => {
    const action = { type: 'UNSUPPORTED_ACTION_TYPE' };

    expect(reducer(initialState, action)).toBe(initialState);
  });
});
