import React from 'react';
import { storiesOf } from '@storybook/react';
import CountChart from "./CountChart";

const chartData = [
  { NAME: 'Page A', IN: 4000, OUT: 2400, PRESENCE: 2400 },
  { NAME: 'Page B', IN: 3000, OUT: 1398, PRESENCE: 2210 },
  { NAME: 'Page C', IN: 2000, OUT: 9800, PRESENCE: 2290 },
  { NAME: 'Page D', IN: 2780, OUT: 3908, PRESENCE: 2000 },
  { NAME: 'Page E', IN: 1890, OUT: 4800, PRESENCE: 2181 },
  { NAME: 'Page F', IN: 2390, OUT: 3800, PRESENCE: 2500 },
  { NAME: 'Page G', IN: 3490, OUT: 4300, PRESENCE: 2100 },
];

storiesOf('common-ui/CountChart', module)
  .add('display data - display all', () =>
    (<CountChart data={chartData} displayIn={true} displayOut={true} displayPresence={true} />)
  )
  .add('display data - display in', () =>
    (<CountChart data={chartData} displayIn={true} displayOut={false} displayPresence={false} />)
  )
  .add('display data - with y Axis Label', () =>
    (<CountChart data={chartData} displayIn={true} displayOut={true} displayPresence={true}
                 yAxisLabel={'Visitor Count'} />)
  )
  .add('display data - full width', () =>
    (<CountChart data={chartData} displayIn={true} displayOut={true} displayPresence={true}
                 width={'100%'} />)
  )
  .add('display data - without legend', () =>
    (<CountChart data={chartData} displayIn={true} displayOut={true} displayPresence={true}
                 legend={false} />)
  )
  .add('display data - without tooltip', () =>
    (<CountChart data={chartData} displayIn={true} displayOut={true} displayPresence={true}
                 tooltip={false} />)
  )
  .add('display data - without grid', () =>
    (<CountChart data={chartData} displayIn={true} displayOut={true} displayPresence={true}
                 grid={false} />)
  )
;
