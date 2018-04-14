import { changeMerchant } from './merchantActions';

describe('merchantActions', () => {
  it('should create an action for merchant change', () => {
    expect(changeMerchant({ id: 2, name: 'Test Merchant' })).toMatchSnapshot();
  });
});

