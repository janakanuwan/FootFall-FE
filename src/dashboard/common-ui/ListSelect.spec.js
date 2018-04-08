import ListSelect from './ListSelect';

const listItems = [
  {
    id: 1,
    name: 'Test Merchant 1',
  },
  {
    id: 2,
    name: 'Test Merchant 2',
  },
];

const listSelectData = [
  {
    items: listItems,
    selectedItem: listItems[0],
    onSelect: item => console.log('Selected item: ', item),
  },
  {
    items: listItems,
    selectedItem: null,
    onSelect: item => console.log('Selected item: ', item),
  },
  {
    items: [],
    selectedItem: null,
    onSelect: item => console.log('Selected item: ', item),
  },
  {
    items: listItems,
    selectedItem: listItems[1],
    onSelect: item => console.log('Selected item: ', item),
  },
  {
    items: listItems,
    selectedItem: { id: 3, name: 'Test Merchant 3' },
    onSelect: item => console.log('Selected item: ', item),
  },
];

describe('ListSelect', () => {
  // FIXME
  throw ('NEED TO IMPLEMENT');
});
