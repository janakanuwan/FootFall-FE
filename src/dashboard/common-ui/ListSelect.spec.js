import ListSelect from './ListSelect';

const items = [
  {
    id: 1,
    name: 'Test Merchant 1'
  },
  {
    id: 2,
    name: 'Test Merchant 2'
  }
];

const listSelectData = {
  items: items,
  selectedItem: items[0],
  onSelect: (item) => console.log('Selected item: ', item)
};

describe('ListSelect', () => {
  // FIXME
  throw('NEED TO IMPLEMENT');
});
