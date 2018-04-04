import graphCountManager from './graphCountManager';

describe('graphCountManager', () => {
  it('should display current date', () => {
    const expected= new Date().toISOString().substring(0, 10);

    expect(graphCountManager.today()).toEqual(expected);
  });

  [
    {date1: '2018-04-04', date2: '2018-04-04', expected: true},
    {date1: '2018-04-03', date2: '2018-04-04', expected: false},
    {date1: '2018-04-05', date2: '2018-04-04', expected: true},
    {date1: null, date2: '2014-04-04', expected: false},
    {date1: '2018-04-04', date2: null, expected: false},
    {date1: undefined, date2: '2014-04-04', expected: false},
    {date1: '2018-04-04', date2: undefined, expected: false},
  ].forEach(({date1, date2, expected}) => {
    it(`should send correct result for 'isSameOrAfter' (${date1}, ${date2})`, () => {
      expect(graphCountManager.isSameOrAfter(date1, date2)).toEqual(expected);
    });
  });

  [
    {dateRange: {fromDate: '2018-04-04', toDate: '2018-04-04'}, type: 'from', date: '2018-04-04', expected: true},
    {dateRange: {fromDate: '2018-04-04', toDate: '2018-04-05'}, type: 'from', date: '2018-04-04', expected: true},
    {dateRange: {fromDate: '2018-04-02', toDate: '2018-04-03'}, type: 'from', date: '2018-04-04', expected: false},
    {dateRange: {fromDate: '2018-04-04', toDate: '2018-04-04'}, type: 'to', date: '2018-04-04', expected: true},
    {dateRange: {fromDate: '2018-04-03', toDate: '2018-04-03'}, type: 'to', date: '2018-04-04', expected: true},
    {dateRange: {fromDate: '2018-04-05', toDate: '2018-04-05'}, type: 'to', date: '2018-04-04', expected: false},
  ].forEach(({dateRange, type, date, expected}) => {
    it(`should send correct result for 'isValidDateRange' ({${dateRange.fromDate}, ${dateRange.toDate}}, ${type}, ${date})`, () => {
      expect(graphCountManager.isValidDateRange(dateRange, type, date)).toEqual(expected);
    });
  });

  [
    {dateRange: {fromDate: '2018-04-04', toDate: '2018-04-04', fromDateMax: '2018-04-04', toDateMin: '2018-04-04',}, type: 'from', date: '2018-04-04',
      expected: [{fromDate: '2018-04-04'}, {toDateMin: '2018-04-04'}]},
    {dateRange: {fromDate: '2018-04-03', toDate: '2018-04-04', fromDateMax: '2018-04-04', toDateMin: '2018-04-03',}, type: 'from', date: '2018-04-04',
      expected: [{fromDate: '2018-04-04'}, {toDateMin: '2018-04-04'}]},
    {dateRange: {fromDate: '2018-04-04', toDate: '2018-04-04', fromDateMax: '2018-04-04', toDateMin: '2018-04-04',}, type: 'to', date: '2018-04-04',
      expected: [{toDate: '2018-04-04'}, {fromDateMax: '2018-04-04'}]},
    {dateRange: {fromDate: '2018-04-04', toDate: '2018-04-04', fromDateMax: '2018-04-04', toDateMin: '2018-04-04',}, type: 'to', date: '2018-04-05',
      expected: [{toDate: '2018-04-05'}, {fromDateMax: '2018-04-05'}]},
  ].forEach(({dateRange, type, date, expected}, index) => {
    it(`should send correct result for 'getUpdatedDateRangeValues' (index:${index})`, () => {
      expect(graphCountManager.getUpdatedDateRangeValues(dateRange, type, date)).toEqual(expected);
    });
  });


});
