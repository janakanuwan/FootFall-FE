
import ButtonSelectGroup from './ButtonSelectGroup';

const buttonSelectGroupData = [
  {
    itemList: ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5'],
    selectedIndex: 0,
    onClick: (index) => console.log('ButtonGroup clickedIndex:', index)
  },
  {
    itemList: ['Button 1', 'Button 2'],
    selectedIndex: 1,
    onClick: (index) => console.log('ButtonGroup clickedIndex:', index)
  },
  {
    itemList: ['Button 1', 'Button 2', 'Button 3', 'Button 4'],
    selectedIndex: 3,
    onClick: (index) => console.log('ButtonGroup clickedIndex:', index)
  },
  {
    itemList: ['Button 1', 'Button 2', 'Button 3'],
    selectedIndex: 2,
    maxButtonCount: 1,
    onClick: (index) => console.log('ButtonGroup clickedIndex:', index),
    size: 'small'
  },
  {
    itemList: ['Button 1', 'Button 2', 'Button 3'],
    selectedIndex: 2,
    maxButtonCount: 2,
    onClick: (index) => console.log('ButtonGroup clickedIndex:', index),
    size: 'large'
  },
];

describe('ButtonSelectGroup', () => {
  // FIXME
  throw('NEED TO IMPLEMENT');
});
