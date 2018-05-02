import dateTimeUtil from './dateTimeUtil';

describe('dateTimeUtil', () => {

  it('should return the milliseconds \'now\'', () => {
    const now = dateTimeUtil.now();
    const expected = Date.now();

    expect(now).toBeLessThanOrEqual(expected);
    expect(now).toBeGreaterThanOrEqual(expected - 10);
  });

  [
    { date: '2018-04-28', expected: 1524853800000 },
    { date: 1525160094000, expected: 1525113000000 },
  ].map(({ date, expected }, index) =>
    it(`should return the milliseconds 'millisStartOfDay' (index:${index})`, () => {
      expect(dateTimeUtil.millisStartOfDay(date)).toEqual(expected);
    })
  );

  [
    { date: '2018-04-28', expected: 1524940199999 },
    { date: 1525160094000, expected: 1525199399999 },
  ].map(({ date, expected }, index) =>
    it(`should return the milliseconds 'millisEndOfDay' (index:${index})`, () => {
      expect(dateTimeUtil.millisEndOfDay(date)).toEqual(expected);
    })
  );

  it('should return the milliseconds \'oneMonthBefore\'', () => {
    const oneMonthBefore = dateTimeUtil.oneMonthBefore();
    const now = Date.now();

    const delta = 100;
    expect(oneMonthBefore).toBeGreaterThanOrEqual(now - 31 * 24 * 3600* 1000 - delta );
    expect(oneMonthBefore).toBeLessThanOrEqual(now - 28 * 24 * 3600* 1000);
  });

  [
    { date1: '2018-04-04', date2: '2018-04-04', expected: true },
    { date1: '2018-04-03', date2: '2018-04-04', expected: false },
    { date1: '2018-04-05', date2: '2018-04-04', expected: true },
    { date1: null, date2: '2014-04-04', expected: false },
    { date1: '2018-04-04', date2: null, expected: false },
    { date1: undefined, date2: '2014-04-04', expected: false },
    { date1: '2018-04-04', date2: undefined, expected: false },
  ].forEach(({ date1, date2, expected }) => {
    it(`should send correct result for 'isSameOrAfter' (${date1}, ${date2})`, () => {
      expect(dateTimeUtil.isSameOrAfter(date1, date2)).toEqual(expected);
    });
  });

  [
    { date: undefined, format: 'dddd, MMMM Do YYYY', expected: '' },
    { date: null, format: 'dddd, MMMM Do YYYY', expected: '' },
    { date: '', format: 'dddd, MMMM Do YYYY', expected: '' },

    { date: '2018-03-21', expected: '2018-03-21T00:00:00' },
    { date: '2018-03-21T05:04:42', expected: '2018-03-21T05:04:42' },
    { date: 1525160094000, expected: '2018-05-01T13:04:54' },

    { date: '2018-03-21', format: 'dddd, MMMM Do YYYY', expected: 'Wednesday, March 21st 2018' },
    { date: '2018-03-21T05:04:42', format: 'dddd, MMMM Do YYYY', expected: 'Wednesday, March 21st 2018' },
    { date: 1524853800000, format: 'dddd, MMMM Do YYYY', expected: 'Saturday, April 28th 2018' },
    { date: 1524877032181, format: 'dddd, MMMM Do YYYY', expected: 'Saturday, April 28th 2018' },

    { date: '2018-03-21', format: 'h:mm A', expected: '12:00 AM' },
    { date: '2018-03-21T05:04:42', format: 'h:mm A', expected: '5:04 AM' },
    { date: 1524853800000, format: 'h:mm A', expected: '12:00 AM' },
    { date: 1524877032181, format: 'h:mm A', expected: '6:27 AM' },
  ].map(({ date, format, expected }, index) =>
    it(`should 'formatDateTime' date=${date}, format=${format} (index:${index})`, () => {
      expect(dateTimeUtil.formatDateTime(date, format)).toEqual(expected);
    })
  );

  [
    {
      fromTime: 1525113000000,
      toTime: 1525141800000,
      expected: [1525113000000, 1525116600000, 1525120200000, 1525123800000, 1525127400000,
        1525131000000, 1525134600000, 1525138200000, 1525141800000],
    },
    {
      fromTime: 1525113000000,
      toTime: 1525141800000,
      binType: 'hourly',
      expected: [1525113000000, 1525116600000, 1525120200000, 1525123800000, 1525127400000,
        1525131000000, 1525134600000, 1525138200000, 1525141800000],
    },
    {
      fromTime: 1525113000000,
      toTime: 1525458600000,
      binType: 'day',
      expected: [1525113000000, 1525199400000, 1525285800000, 1525372200000, 1525458600000],
    },
    {
      fromTime: 1525113000000,
      toTime: 1526581800000,
      binType: 'week',
      expected: [1525113000000, 1525717800000, 1526322600000, 1526581800000],
    },
    {
      fromTime: 1525113000000,
      toTime: 1533666600000,
      binType: 'month',
      expected: [1525113000000, 1527791400000, 1530383400000, 1533061800000, 1533666600000],
    },
  ].map(({ fromTime, toTime, binType, expected }, index) =>
    it(`should return the 'timeBinRange' (index:${index})`, () => {
      expect(dateTimeUtil.timeBinRange(fromTime, toTime, binType)).toEqual(expected);
    })
  );

});
