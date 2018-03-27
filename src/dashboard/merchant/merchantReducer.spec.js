import merchantReducer from './merchantReducer';
import {changeMerchant} from "./merchantActions";


describe('merchantReducer', () => {
  it('should change merchant for empty selected merchant', () => {
    const initState = {};
    const action = changeMerchant(1);
    const expected = {selectedMerchant: 1};

    expect(merchantReducer(initState, action)).toEqual(expected);
  });

  it('should change merchant for non-empty selected merchant', () => {
    const initState = merchantReducer({}, changeMerchant(null, 0));
    const action = changeMerchant(1);
    const expected = {selectedMerchant: 1};

    expect(merchantReducer(initState, action)).toEqual(expected);
  });

  it('should not change the state for unknown action', () => {
    const initState = merchantReducer({}, changeMerchant(0));
    const action = {type: 'UNSUPPORTED_ACTION_TYPE'};

    expect(merchantReducer(initState, action)).toBe(initState);
  });

});
