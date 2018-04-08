import MerchantLocation from './MerchantLocation';

const locationItems = [1, 2, 3, 4, 5].map((item) => ({ id: item, name: `Location ${item}` }));
const merchantLocationData = [
  {
    locationList: locationItems,
    selectedLocation: locationItems[0],
    onClick: (location) => console.log('Selected location : ', location)
  },
  {
    locationList: locationItems,
    selectedLocation: { id: 6, name: 'Location 6' },
    onClick: (location) => console.log('Selected location : ', location)
  },
  {
    locationList: [],
    selectedLocation: null,
  }
];

describe('MerchantLocation', () => {
  // FIXME
  throw('NEED TO IMPLEMENT');
});

