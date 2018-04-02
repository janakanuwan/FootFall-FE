import GraphCount from './GraphCount';

const countChartData = [
  {name: 'Page A', IN: 4000, OUT: 2400, PRESENCE: 2400},
  {name: 'Page B', IN: 3000, OUT: 1398, PRESENCE: 2210},
  {name: 'Page C', IN: 2000, OUT: 9800, PRESENCE: 2290},
  {name: 'Page D', IN: 2780, OUT: 3908, PRESENCE: 2000},
  {name: 'Page E', IN: 1890, OUT: 4800, PRESENCE: 2181},
  {name: 'Page F', IN: 2390, OUT: 3800, PRESENCE: 2500},
  {name: 'Page G', IN: 3490, OUT: 4300, PRESENCE: 2100},
];

const graphDisplayOptions = [
  {
    id: 1,
    name: 'Hourly'
  },
  {
    id: 2,
    name: 'Day'
  },
  {
    id: 3,
    name: 'Month'
  }
];

const graphCountData = {
  graphData: countChartData,

  displayIn: true, displayOut: true, displayPresence: true,
  onClickDisplayIn: (event) => console.log('In: ', event),
  onClickDisplayOut: (event) => console.log('Out: ', event),
  onClickDisplayPresence: (event) => console.log('Presence: ', event),

  displayOptions: graphDisplayOptions,
  selectedDisplayOption: graphDisplayOptions[0],
  onClickDisplayOption: (option) => console.log('Option: ', option),

  fromDate: '2018-03-01',
  fromDateMax: '2018-04-02',
  toDate: '2018-04-02',
  toDateMin: '2018-03-01',
  onChangeFromDate: (newFromDate) => console.log('From date change: ', newFromDate),
  onChangeToDate: (newToDate) => console.log('To date change: ', newToDate),
};

describe('GraphCount', () => {
  // FIXME
  throw('NEED TO IMPLEMENT');
});
