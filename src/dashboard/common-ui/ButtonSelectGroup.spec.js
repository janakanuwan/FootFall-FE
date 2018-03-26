import ButtonSelectGroup from './ButtonSelectGroup';

const buttonSelectGroupData = [
  {
    data: ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5'].map((item, index) => ({id: index, name: item})),
    selectedIndex: 0,
    onClick: (clickedData) => console.log('ButtonGroup clicked data:', clickedData)
  },
  {
    data: ['Button 1', 'Button 2'].map((item, index) => ({id: index, name: item})),
    selectedIndex: 1,
    onClick: (clickedData) => console.log('ButtonGroup clicked data:', clickedData)
  },
  {
    data: ['Button 1', 'Button 2', 'Button 3', 'Button 4'].map((item, index) => ({id: index, name: item})),
    selectedIndex: 3,
    onClick: (clickedData) => console.log('ButtonGroup clicked data:', clickedData)
  },
  {
    data: ['Button 1', 'Button 2', 'Button 3'].map((item, index) => ({id: index, name: item})),
    selectedIndex: 2,
    maxButtonCount: 1,
    onClick: (clickedData) => console.log('ButtonGroup clicked data:', clickedData)
    size: 'small'
  },
  {
    data: ['Button 1', 'Button 2', 'Button 3'].map((item, index) => ({id: index, name: item})),
    selectedIndex: 2,
    maxButtonCount: 2,
    onClick: (clickedData) => console.log('ButtonGroup clicked data:', clickedData)
    size: 'large'
  },
];

describe('ButtonSelectGroup', () => {
  // FIXME
  throw('NEED TO IMPLEMENT');
});
