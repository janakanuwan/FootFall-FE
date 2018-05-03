import React from 'react';
import { storiesOf } from '@storybook/react';

import DayCount from './DayCount';

storiesOf('DayCount', module)
  .add('With data', () => {
    const data = {
      dayName: 'Today',
      day: 'Saturday, April 28th 2018',
      time: '6:27 AM',
      count: 50,
    };
    return (<DayCount {...data} />);
  })
;
