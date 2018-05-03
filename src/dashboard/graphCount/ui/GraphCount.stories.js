import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions'

import GraphCount from './GraphCount';

const countChartData = [
  { NAME: 'Page A', IN: 4000, OUT: 2400, PRESENCE: 2400 },
  { NAME: 'Page B', IN: 3000, OUT: 1398, PRESENCE: 2210 },
  { NAME: 'Page C', IN: 2000, OUT: 9800, PRESENCE: 2290 },
  { NAME: 'Page D', IN: 2780, OUT: 3908, PRESENCE: 2000 },
  { NAME: 'Page E', IN: 1890, OUT: 4800, PRESENCE: 2181 },
  { NAME: 'Page F', IN: 2390, OUT: 3800, PRESENCE: 2500 },
  { NAME: 'Page G', IN: 3490, OUT: 4300, PRESENCE: 2100 },
];

const graphDisplayOptions = [
  ,
  { id: 2, name: 'Day' },
  { id: 3, name: 'Month' },
];

storiesOf('GraphCount', module)
  .add('With all data', () => {
    const data = {
      graphData: countChartData,

      displayTypeData: { in: true, out: true, presence: true },
      onClickDisplayType: action('click-displayType'),

      selectedDisplayOption: 'hourly',
      onClickDisplayOption: action('click-displayOption'),

      dateRange: {
        fromDate: '2018-03-01',
        fromDateMax: '2018-04-02',
        toDate: '2018-04-02',
        toDateMin: '2018-03-01',
      },
      onChangeDate: action('click-dateRange'),
    };
    return (<GraphCount {...data} />)
  })
;
