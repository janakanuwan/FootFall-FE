import MerchantOverview from './MerchantOverview';

const merchants = [
  {
    id: 1,
    name: 'Test Merchant 1',
  },
  {
    id: 2,
    name: 'Test Merchant 2',
  },
];

const merchantOverviewData = [
  {
    merchantList: merchants,
    selectedMerchant: merchants[0],
    onSelect: merchant => console.log('Selected merchant: ', merchant),
  },
  {
    merchantList: merchants,
    selectedMerchant: null,
    onSelect: merchant => console.log('Selected merchant: ', merchant),
  },
  {
    merchantList: [],
    selectedMerchant: null,
    onSelect: merchant => console.log('Selected merchant: ', merchant),
  },
  {
    merchantList: merchants,
    selectedMerchant: merchants[1],
  },
];

describe('MerchantOverview', () => {
  // FIXME
  throw ('NEED TO IMPLEMENT');
});
