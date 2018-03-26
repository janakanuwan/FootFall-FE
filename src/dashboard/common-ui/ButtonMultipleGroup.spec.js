import ButtonMultipleGroup from './ButtonMultipleGroup';

const buttonMultipleGroupData = {
  data: ['Button 1', 'Button 2', 'Button 3'].map((item, index) => ({id: index, name: item})),
  selectedIndices: [0],
  onClick: (index) => console.log('ButtonMultipleGroup selectedIndices:', index),
  size: 'large'
};

describe('ButtonMultipleGroup', () => {
  // FIXME
  throw('NEED TO IMPLEMENT');
});
