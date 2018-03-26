import MerchantLocation from './MerchantLocation';

const locationItems = [
  {
    id: 1,
    name: 'Location 1'
  },
  {
    id: 2,
    name: 'Location 2'
  },
  {
    id: 3,
    name: 'Location 3'
  },
  {
    id: 4,
    name: 'Location 4'
  },
  {
    id: 5,
    name: 'Location 5'
  }
];

const merchantLocationData = {
  locationList: locationItems,
  selectedLocation: locationItems[0],
  onClick: (location) => console.log('Selected location : ', location)
};

describe('MerchantLocation', () => {
  // FIXME
  throw('NEED TO IMPLEMENT');
});

