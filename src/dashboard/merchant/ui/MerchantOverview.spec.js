import MerchantOverview from './MerchantOverview';

const merchants = [
  {
    id: 1,
    name: 'Test Merchant 1'
  },
  {
    id: 2,
    name: 'Test Merchant 2'
  }
];

const merchantOverviewData = {
  merchantList: merchants,
  selectedMerchant: merchants[0],
  onSelect: (merchant) => console.log('Selected merchant: ', merchant)
};

describe('MerchantOverview', () => {
  // FIXME
  throw('NEED TO IMPLEMENT');
});
