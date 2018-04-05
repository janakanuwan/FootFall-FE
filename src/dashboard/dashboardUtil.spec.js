import dashboardUtil from './dashboardUtil';

describe('dashboardManager', () => {

  const getTwoDigitNumber = (number) => {
    return number <=9 ? `0${number}` : `${number}`;
  };

  it('should display \'today\'', () => {
    const todayDate = new Date();
    const expected =  todayDate.getFullYear() + '-'+ getTwoDigitNumber(todayDate.getMonth() + 1 ) + '-' + getTwoDigitNumber(todayDate.getDate());

    expect(dashboardUtil.today()).toEqual(expected);
  });

  it('should display \'todayWithTime\'', () => {
    console.log(dashboardUtil.todayWithTime());

    expect(dashboardUtil.todayWithTime().substring(0,10)).toEqual(dashboardUtil.today());
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
      expect(dashboardUtil.isSameOrAfter(date1, date2)).toEqual(expected);
    });
  });

});
