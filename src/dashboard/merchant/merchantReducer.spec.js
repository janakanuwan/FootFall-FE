import reducer from './merchantReducer';
import {changeMerchant} from "./merchantActions";
import {Merchant} from 'Models';

describe('merchantReducer', () => {

  const initialState = reducer(undefined, {type: 'INIT'});

  const merchant1 = {id: 1, name: 'Test1'};
  const merchant2 = {id: 2, name: 'Test2'};

  it('should change merchant for empty selected merchant', () => {
    const action = changeMerchant(Merchant(merchant1));
    const expected = {list: [], selectedMerchant: merchant1};

    expect(reducer(initialState, action).toJS()).toEqual(expected);
  });

  it('should change merchant for non-empty selected merchant', () => {
    const baseState = reducer(initialState, changeMerchant(merchant2));
    const action = changeMerchant(merchant1);
    const expected = {list: [], selectedMerchant: merchant1};

    expect(reducer(baseState, action).toJS()).toEqual(expected);
  });

  it('should not change the state for unknown action', () => {
    const action = {type: 'UNSUPPORTED_ACTION_TYPE'};

    expect(reducer(initialState, action)).toBe(initialState);
  });

});
