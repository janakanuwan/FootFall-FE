import { changeMerchant } from './merchantActions';

describe('merchantActions', () => {
  it('should create an action for merchant change', () => {
    expect(changeMerchant(1)).toMatchSnapshot();
  });
});


