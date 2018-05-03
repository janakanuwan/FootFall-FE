import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

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
    description: 'With first item selected',
    data: {
      items: listItems,
      selectedItem: listItems[0],
      onSelect: item => action(`Selected item: ${item}`),
    }
  },
  {
    description: 'With selected item null',
    data: {
      items: listItems,
      selectedItem: null,
      onSelect: item => action(`Selected item: ${item}`),
    }
  },
  {
    description: 'Empty',
    data: {
      items: [],
      selectedItem: null,
      onSelect: item => action(`Selected item: ${item}`),
    }
  },
  {
    description: 'With last item selected',
    data: {
      items: listItems,
      selectedItem: listItems[1],
      onSelect: item => action(`Selected item: ${item}`),
    }
  },
  {
    description: 'With selected item not available',
    data: {
      items: listItems,
      selectedItem: { id: 3, name: 'Test Merchant 3' },
      onSelect: item => action(`Selected item: ${item}`),
    }
  },
];

const stories = storiesOf('common-ui/ListSelect', module);
listSelectData.forEach(({ description, data }) =>
  stories.add(description, () => (<ListSelect {...data} />))
);
