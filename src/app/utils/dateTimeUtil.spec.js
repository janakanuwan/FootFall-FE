import dateTimeUtil from './dateTimeUtil';

describe('dashboardManager', () => {
  const getTwoDigitNumber = number => (number <= 9 ? `0${number}` : `${number}`);

  it('should display \'today\'', () => {
    const todayDate = new Date();
    const expected = `${todayDate.getFullYear()}-${getTwoDigitNumber(todayDate.getMonth() + 1)}-${getTwoDigitNumber(todayDate.getDate())}`;

    expect(dateTimeUtil.today()).toEqual(expected);
  });

  it('should display \'todayWithTime\'', () => {
    console.log(dateTimeUtil.todayWithTime());

    expect(dateTimeUtil.todayWithTime().substring(0, 10)).toEqual(dateTimeUtil.today());
  });

  it('should display the milliseconds \'now\'', () => {
    const now = dateTimeUtil.now();
    const expected = Date.now();

    expect(now).toEqual(expected);
  });

  it('should display the milliseconds \'oneMonthBefore\'', () => {
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

});
