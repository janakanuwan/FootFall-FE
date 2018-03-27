import reducer from './merchantReducer';
import {changeMerchant} from "./merchantActions";

import deepFreeze from 'deep-freeze';

describe('reducer', () => {

  const initialState = deepFreeze(reducer(undefined, {type: 'INIT'}));

  it('should change merchant for empty selected merchant', () => {
    const action = changeMerchant(1);
    const expected = {list: [], selectedMerchant: 1};

    expect(reducer(initialState, action)).toEqual(expected);
  });

  it('should change merchant for non-empty selected merchant', () => {
    const baseState = reducer(initialState, changeMerchant(null, 0));
    const action = changeMerchant(1);
    const expected = {list: [], selectedMerchant: 1};

    expect(reducer(baseState, action)).toEqual(expected);
  });

  it('should not change the state for unknown action', () => {
    const action = {type: 'UNSUPPORTED_ACTION_TYPE'};

    expect(reducer(initialState, action)).toBe(initialState);
  });

});
