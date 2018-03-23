import MerchantSelect from './MerchantSelect';

const merchantSelectData = {
  merchants: [
    {
      id: 1,
      name: 'Test Merchant 1'
    },
    {
      id: 2,
      name: 'Test Merchant 2'
    }
  ],
  selectedIndex: 0,
  onSelect: (index) => console.log('Selected data: ', index)
};

describe('MerchantSelect', () => {
  // FIXME
  throw('NEED TO IMPLEMENT');
});
