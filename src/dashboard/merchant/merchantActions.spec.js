import { changeMerchant, setMerchantsResponse } from './merchantActions';

describe('merchantActions', () => {
  it('should create an action for merchant change', () => {
    expect(changeMerchant({ id: 2, name: 'Test Merchant' })).toMatchSnapshot();
  });

  it('should create an action to set merchant response', () => {

  });
});

