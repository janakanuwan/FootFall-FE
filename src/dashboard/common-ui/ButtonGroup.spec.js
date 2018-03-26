import ButtonGroup from './ButtonGroup';

const buttonGroupData = {
  data: [
    {
      id: 1,
      name: 'Button 1'
    },
    {
      id: 2,
      name: 'Button 2'
    },
    {
      id: 3,
      name: 'Button 3'
    }
  ],
  selectedIndex: 0,
  onClick: (clickedData) => console.log('ButtonGroup clicked data:', clickedData),
  size: 'large'
};
describe('ButtonGroup', () => {
  // FIXME
  throw('NEED TO IMPLEMENT');
});
