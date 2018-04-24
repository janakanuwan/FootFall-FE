import { changeMerchant, fetchMerchants, setMerchants, } from './merchantActions';

describe('merchantActions', () => {
  it('should create an action for merchant change', () => {
    expect(changeMerchant({ id: 2, name: 'Test Merchant' })).toMatchSnapshot();
  });

  it('should create an action to set merchant response', () => {
    expect(setMerchants([{ id: 1, name: 'Test merchant 1' }, { id: 2, name: 'Test Merchant 2' }])).toMatchSnapshot();
  });

  it('should create an action to set failed  merchant response', () => {
    const action = setMerchants(new Error('Failed to fetch'));
    expect(action).toMatchSnapshot();
    expect(action.error).toEqual(true);
    expect(action.payload.message).not.toEqual(null);
  });

  it('should create an action to fetch merchants', () => {
    expect(fetchMerchants({ token: '1234', id: 1, email: 'hello@gmail.com' })).toMatchSnapshot();
  });

});

