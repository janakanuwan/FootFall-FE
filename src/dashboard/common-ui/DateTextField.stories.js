import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import DateTextField from './DateTextField';

const dateTextFieldData = [
  {
    description: 'With date, min and max set',
    data: {
      label: 'From',
      date: '2010-02-20',
      min: '2010-02-01',
      max: '2010-02-28',
      onChange: action(`select-date`),
    }
  },
  {
    description: 'With a month set',
    data: {
      label: 'From',
      date: '2010-02',
      onChange: action(`select-date`),
    }
  },
  {
    description: 'With date not set : default',
    data: {
      label: 'From',
      onChange: action(`select-date`),
    }
  },
  {
    description: 'With date null',
    data: {
      label: 'From',
      date: null,
    }
  },
  {
    description: 'With date set, but max null',
    data: {
      label: 'From',
      date: '2018-01-01',
      max: null,
      onChange: action(`select-date`),
    }
  },
];

const stories = storiesOf('common-ui/DateTextField', module);
dateTextFieldData.forEach(({ description, data }) =>
  stories.add(description, () => (<DateTextField {...data} />))
);
