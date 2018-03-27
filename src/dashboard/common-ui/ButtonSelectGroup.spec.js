import ButtonSelectGroup from './ButtonSelectGroup';

const buttonSelectItems = ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5'].map((item, index) => ({
  id: index,
  name: item
}));

const buttonSelectGroupData = [
  {
    items: buttonSelectItems,
    selectedItem: buttonSelectItems[0],
    onClick: (clickedItem) => console.log('ButtonGroup clicked item:', clickedItem)
  },
  {
    items: buttonSelectItems.slice(0, 2),
    selectedItem: buttonSelectItems[1],
    onClick: (clickedItem) => console.log('ButtonGroup clicked item:', clickedItem)
  },
  {
    items: buttonSelectItems.slice(0, 4),
    selectedItem: buttonSelectItems[3],
    onClick: (clickedItem) => console.log('ButtonGroup clicked item:', clickedItem)
  },
  {
    items: buttonSelectItems.slice(0, 3),
    selectedItem: buttonSelectItems[2],
    maxButtonCount: 1,
    onClick: (clickedItem) => console.log('ButtonGroup clicked item:', clickedItem),
    size: 'small'
  },
  {
    items: buttonSelectItems.slice(0, 3),
    selectedItem: buttonSelectItems[2],
    maxButtonCount: 2,
    onClick: (clickedItem) => console.log('ButtonGroup clicked item:', clickedItem),
    size: 'large'
  },
  {
    items: [],
    selectedItem: null,
  },
  {
    items: buttonSelectItems,
    selectedItem: {id: 6, name: 'Button 6'},
    onClick: (clickedItem) => console.log('ButtonGroup clicked item:', clickedItem),
  },
];

describe('ButtonSelectGroup', () => {
  // FIXME
  throw('NEED TO IMPLEMENT');
});
