import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MerchantLocation from './MerchantLocation';

const locationItems = [1, 2, 3, 4, 5].map(item => ({ id: item, name: `Location ${item}` }));
const merchantLocationData = [
  {
    description: 'With first location selected',
    data: {
      locationList: locationItems,
      selectedLocation: locationItems[0],
      onClick: location => action(`Selected location : ${location}`),
    }
  },
  {
    description: 'With unavailable selected location ',
    data: {
      locationList: locationItems,
      selectedLocation: { id: 6, name: 'Location 6' },
      onClick: location => action(`Selected location : ${location}`),
    }
  },
  {
    description: 'Empty',
    data: {
      locationList: [],
      selectedLocation: null,
    }
  },
];

const stories = storiesOf('MerchantLocation', module);
merchantLocationData.forEach(({ description, data }) =>
  stories.add(description, () => (<MerchantLocation {...data} />))
);

