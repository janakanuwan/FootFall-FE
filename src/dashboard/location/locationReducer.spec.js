import {changeLocation} from "./locationActions";
import reducer from "./locationReducer";

import deepFreeze from 'deep-freeze';

describe('reducer', () => {

  const initialState = deepFreeze(reducer(undefined, {type: 'INIT'}));

  it('should change the location for empty selected location', () => {
    const action = changeLocation(1);
    const expected = {list: [], selectedLocation: 1};

    expect(reducer(initialState, action)).toEqual(expected);
  });

  it('should change the location for non-empty selected location', () => {
    const baseState = reducer(initialState, changeLocation(0));
    const action = changeLocation(1);
    const expected = {list: [], selectedLocation: 1};

    expect(reducer(baseState, action)).toEqual(expected);
  });

  it('should not change the state for unsupported action', () => {
    const action = {type: 'UNSUPPORTED_ACTION_TYPE'};

    expect(reducer(initialState, action)).toBe(initialState);
  });
});
