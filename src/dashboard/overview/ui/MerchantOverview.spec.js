import MerchantOverview from './MerchantOverview';

const merchantOverviewData = {
  merchantList: [
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
  onSelect: (index) => console.log('Selected merchant index: ', index)
};

describe('MerchantOverview', () => {
  // FIXME
  throw('NEED TO IMPLEMENT');
});
