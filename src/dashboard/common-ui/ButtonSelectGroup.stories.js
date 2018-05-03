import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ButtonSelectGroup from './ButtonSelectGroup';

const buttonSelectItems = ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5'].map((item, index) => ({
  id: index,
  name: item,
}));

const buttonSelectGroupData = [
  {
    description: 'With first item selected',
    data: {
      items: buttonSelectItems,
      selectedItem: buttonSelectItems[0],
      onClick: clickedItem => action(`clicked:${clickedItem}`),
    }
  },
  {
    description: 'With mid item selected',
    data: {
      items: buttonSelectItems.slice(0, 2),
      selectedItem: buttonSelectItems[1],
      onClick: clickedItem => action(`clicked:${clickedItem}`)
    }
  },
  {
    description: 'With last item selected',
    data: {
      items: buttonSelectItems.slice(0, 4),
      selectedItem: buttonSelectItems[3],
      onClick: clickedItem => action(`clicked:${clickedItem}`)
    }
  },
  {
    description: 'With small size',
    data: {
      items: buttonSelectItems.slice(0, 3),
      selectedItem: buttonSelectItems[2],
      maxButtonCount: 1,
      onClick: clickedItem => action(`clicked:${clickedItem}`),
      size: 'small',
    }
  },
  {
    description: 'With large size',
    data: {
      items: buttonSelectItems.slice(0, 3),
      selectedItem: buttonSelectItems[2],
      maxButtonCount: 2,
      onClick: clickedItem => action(`clicked:${clickedItem}`),
      size: 'large',
    }
  },
  {
    description: 'Empty',
    data: {
      items: [],
      selectedItem: null,
    }
  },
  {
    description: 'With selected item not available',
    data: {
      items: buttonSelectItems,
      selectedItem: { id: 6, name: 'Button 6' },
      onClick: clickedItem => action(`clicked:${clickedItem}`)
    }
  },
];

const stories = storiesOf('common-ui/ButtonSelectGroup', module);
buttonSelectGroupData.forEach(({ description, data }) =>
  stories.add(description, () => (<ButtonSelectGroup {...data} />))
);

