import graphCountManager from './graphCountManager';

describe('graphCountManager', () => {

  [
    { dateRange: { fromDate: '2018-04-04', toDate: '2018-04-04' }, type: 'from', date: '2018-04-04', expected: true },
    { dateRange: { fromDate: '2018-04-04', toDate: '2018-04-05' }, type: 'from', date: '2018-04-04', expected: true },
    { dateRange: { fromDate: '2018-04-02', toDate: '2018-04-03' }, type: 'from', date: '2018-04-04', expected: false },
    { dateRange: { fromDate: '2018-04-04', toDate: '2018-04-04' }, type: 'to', date: '2018-04-04', expected: true },
    { dateRange: { fromDate: '2018-04-03', toDate: '2018-04-03' }, type: 'to', date: '2018-04-04', expected: true },
    { dateRange: { fromDate: '2018-04-05', toDate: '2018-04-05' }, type: 'to', date: '2018-04-04', expected: false },
  ].forEach(({ dateRange, type, date, expected }) => {
    it(`should send correct result for 'isValidDateRange' ({${dateRange.fromDate}, ${dateRange.toDate}}, ${type}, ${date})`, () => {
      expect(graphCountManager.isValidDateRange(dateRange, type, date)).toEqual(expected);
    });
  });

  [
    {
      dateRange: { fromDate: '2018-04-04', toDate: '2018-04-04', fromDateMax: '2018-04-04', toDateMin: '2018-04-04', },
      type: 'from',
      date: '2018-04-04',
      expected: [{ fromDate: '2018-04-04' }, { toDateMin: '2018-04-04' }]
    },
    {
      dateRange: { fromDate: '2018-04-03', toDate: '2018-04-04', fromDateMax: '2018-04-04', toDateMin: '2018-04-03', },
      type: 'from',
      date: '2018-04-04',
      expected: [{ fromDate: '2018-04-04' }, { toDateMin: '2018-04-04' }]
    },
    {
      dateRange: { fromDate: '2018-04-04', toDate: '2018-04-04', fromDateMax: '2018-04-04', toDateMin: '2018-04-04', },
      type: 'to',
      date: '2018-04-04',
      expected: [{ toDate: '2018-04-04' }, { fromDateMax: '2018-04-04' }]
    },
    {
      dateRange: { fromDate: '2018-04-04', toDate: '2018-04-04', fromDateMax: '2018-04-04', toDateMin: '2018-04-04', },
      type: 'to',
      date: '2018-04-05',
      expected: [{ toDate: '2018-04-05' }, { fromDateMax: '2018-04-05' }]
    },
  ].forEach(({ dateRange, type, date, expected }, index) => {
    it(`should send correct result for 'getUpdatedDateRangeValues' (index:${index})`, () => {
      expect(graphCountManager.getUpdatedDateRangeValues(dateRange, type, date)).toEqual(expected);
    });
  });


});
