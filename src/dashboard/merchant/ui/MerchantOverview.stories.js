import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MerchantOverview from './MerchantOverview';

const merchants = [
  { id: 1, name: 'Test Merchant 1' },
  { id: 2, name: 'Test Merchant 2' },
];

const merchantOverviewData = [
  {
    description: 'With first merchant selected',
    data: {
      merchantList: merchants,
      selectedMerchant: merchants[0],
      onSelect: action('select-merchant'),
    }
  },
  {
    description: 'With selected merchant null',
    data: {
      merchantList: merchants,
      selectedMerchant: null,
      onSelect: action('select-merchant'),
    }
  },
  {
    description: 'Empty',
    data: {
      merchantList: [],
      selectedMerchant: null,
      onSelect: action('select-merchant'),
    }
  },
];

const stories = storiesOf('MerchantOverview', module);
merchantOverviewData.forEach(({ description, data }) =>
  stories.add(description, () => (<MerchantOverview {...data} />))
);
