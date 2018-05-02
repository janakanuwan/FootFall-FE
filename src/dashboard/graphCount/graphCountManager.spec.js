import graphCountManager from './graphCountManager';
import { List, Record } from 'Models';

describe('graphCountManager', () => {
  [
    {
      dateRange: { fromDate: '2018-04-04', toDate: '2018-04-04' }, type: 'from', date: '2018-04-04', expected: true,
    },
    {
      dateRange: { fromDate: '2018-04-04', toDate: '2018-04-05' }, type: 'from', date: '2018-04-04', expected: true,
    },
    {
      dateRange: { fromDate: '2018-04-02', toDate: '2018-04-03' }, type: 'from', date: '2018-04-04', expected: false,
    },
    {
      dateRange: { fromDate: '2018-04-04', toDate: '2018-04-04' }, type: 'to', date: '2018-04-04', expected: true,
    },
    {
      dateRange: { fromDate: '2018-04-03', toDate: '2018-04-03' }, type: 'to', date: '2018-04-04', expected: true,
    },
    {
      dateRange: { fromDate: '2018-04-05', toDate: '2018-04-05' }, type: 'to', date: '2018-04-04', expected: false,
    },
  ].forEach(({
    dateRange, type, date, expected,
  }) => {
    it(`should send correct result for 'isValidDateRange' ({${dateRange.fromDate}, ${dateRange.toDate}}, ${type}, ${date})`, () => {
      expect(graphCountManager.isValidDateRange(dateRange, type, date)).toEqual(expected);
    });
  });

  [
    {
      dateRange: {
        fromDate: '2018-04-04', toDate: '2018-04-04', fromDateMax: '2018-04-04', toDateMin: '2018-04-04',
      },
      type: 'from',
      date: '2018-04-04',
      expected: [{ fromDate: '2018-04-04' }, { toDateMin: '2018-04-04' }],
    },
    {
      dateRange: {
        fromDate: '2018-04-03', toDate: '2018-04-04', fromDateMax: '2018-04-04', toDateMin: '2018-04-03',
      },
      type: 'from',
      date: '2018-04-04',
      expected: [{ fromDate: '2018-04-04' }, { toDateMin: '2018-04-04' }],
    },
    {
      dateRange: {
        fromDate: '2018-04-04', toDate: '2018-04-04', fromDateMax: '2018-04-04', toDateMin: '2018-04-04',
      },
      type: 'to',
      date: '2018-04-04',
      expected: [{ toDate: '2018-04-04' }, { fromDateMax: '2018-04-04' }],
    },
    {
      dateRange: {
        fromDate: '2018-04-04', toDate: '2018-04-04', fromDateMax: '2018-04-04', toDateMin: '2018-04-04',
      },
      type: 'to',
      date: '2018-04-05',
      expected: [{ toDate: '2018-04-05' }, { fromDateMax: '2018-04-05' }],
    },
  ].forEach(({
    dateRange, type, date, expected,
  }, index) => {
    it(`should send correct result for 'updatedDateRangeValues' (index:${index})`, () => {
      expect(graphCountManager.updatedDateRangeValues(dateRange, type, date)).toEqual(expected);
    });
  });

  const TestEntry = Record({ entry: Number, exit: Number, locationId: Number, time: Number });

  [
    {
      entries: [
        { entry: 1, exit: 0, locationId: 1, time: 1525116600000 },
        { entry: 2, exit: 1, locationId: 2, time: 1525120200000 },
        { entry: 3, exit: 1, locationId: 1, time: 1525120200000 },
        { entry: 2, exit: 3, locationId: 1, time: 1525123800000 },
        { entry: 5, exit: 6, locationId: 1, time: 1525127400000 },
        { entry: 4, exit: 2, locationId: 1, time: 1525131000000 },
        { entry: 3, exit: 0, locationId: 1, time: 1525134600000 },
        { entry: 0, exit: 1, locationId: 1, time: 1525138200000 },
      ],
      location: { id: 1 },
      dateRange: { fromDate: '2018-05-01', toDate: '2018-05-01' },
      optionType: 'hourly'
    },
    {
      entries: [
        { entry: 1, exit: 0, locationId: 1, time: 1525116600000 },
        { entry: 2, exit: 1, locationId: 2, time: 1525120200000 },
        { entry: 3, exit: 1, locationId: 1, time: 1525120200000 },
        { entry: 2, exit: 3, locationId: 1, time: 1525123800000 },
        { entry: 5, exit: 6, locationId: 1, time: 1525127400000 },
        { entry: 4, exit: 2, locationId: 1, time: 1525131000000 },
        { entry: 3, exit: 0, locationId: 1, time: 1525134600000 },
        { entry: 0, exit: 1, locationId: 1, time: 1525138200000 },
      ],
      location: { id: 1 },
      dateRange: { fromDate: '2018-05-01', toDate: '2018-05-01' },
      optionType: 'hourly'
    },
    {
      entries: [
        { entry: 1, exit: 0, locationId: 1, time: 1525113000000 },
        { entry: 2, exit: 1, locationId: 1, time: 1525120200000 },
        { entry: 1, exit: 2, locationId: 1, time: 1525123800000 },

        { entry: 2, exit: 1, locationId: 1, time: 1525199400000 },
        { entry: 3, exit: 1, locationId: 1, time: 1525285800000 },
        { entry: 2, exit: 3, locationId: 1, time: 1525372200000 },
        { entry: 6, exit: 5, locationId: 1, time: 1525458600000 },
      ],
      location: { id: 1 },
      dateRange: { fromDate: '2018-05-01', toDate: '2018-05-04' },
      optionType: 'day'
    },
    {
      entries: [
        { entry: 1, exit: 0, locationId: 1, time: 1525113000000 },
        { entry: 2, exit: 1, locationId: 1, time: 1525120200000 },
        { entry: 1, exit: 2, locationId: 1, time: 1525123800000 },
        { entry: 2, exit: 1, locationId: 1, time: 1525199400000 },

        { entry: 3, exit: 1, locationId: 1, time: 1525717800000 },
        { entry: 2, exit: 3, locationId: 1, time: 1526322600000 },
        { entry: 6, exit: 5, locationId: 1, time: 1526581800000 },
      ],
      location: { id: 1 },
      dateRange: { fromDate: '2018-05-01', toDate: '2018-05-18' },
      optionType: 'week'
    },
    {
      entries: [
        { entry: 1, exit: 0, locationId: 1, time: 1525113000000 },
        { entry: 2, exit: 1, locationId: 1, time: 1525120200000 },
        { entry: 1, exit: 2, locationId: 1, time: 1525123800000 },
        { entry: 2, exit: 1, locationId: 1, time: 1525199400000 },

        { entry: 3, exit: 1, locationId: 1, time: 1527791400000 },
        { entry: 2, exit: 3, locationId: 1, time: 1530383400000 },
        { entry: 6, exit: 5, locationId: 1, time: 1533061800000 },
        { entry: 4, exit: 2, locationId: 1, time: 1533666600000 },
      ],
      location: { id: 1 },
      dateRange: { fromDate: '2018-05-01', toDate: '2018-09-20' },
      optionType: 'month'
    },
  ].map(({ entries, location, dateRange, optionType }, index) =>
    it(`should return 'computedGraphData' (index: ${index})`, () => {
      expect(graphCountManager.computedGraphData(List(TestEntry)(entries), location, dateRange, optionType).toJS()).toMatchSnapshot();
    })
  );


});
