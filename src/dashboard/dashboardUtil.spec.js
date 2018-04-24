import dashboardUtil from './dashboardUtil';
import { List, Record } from 'Models';

describe('dashboardManager', () => {
  const getTwoDigitNumber = number => (number <= 9 ? `0${number}` : `${number}`);

  it('should display \'today\'', () => {
    const todayDate = new Date();
    const expected = `${todayDate.getFullYear()}-${getTwoDigitNumber(todayDate.getMonth() + 1)}-${getTwoDigitNumber(todayDate.getDate())}`;

    expect(dashboardUtil.today()).toEqual(expected);
  });

  it('should display \'todayWithTime\'', () => {
    console.log(dashboardUtil.todayWithTime());

    expect(dashboardUtil.todayWithTime().substring(0, 10)).toEqual(dashboardUtil.today());
  });

  it('should display the milliseconds \'now\'', () => {
    console.log(dashboardUtil.now(), Date.now());

    expect(dashboardUtil.now()).toEqual(Date.now());
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
      expect(dashboardUtil.isSameOrAfter(date1, date2)).toEqual(expected);
    });
  });

  const Item = Record({ id: Number });

  [
    {
      oldList: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
      newList: [{ id: 3 }, { id: 4 }, { id: 5 }],
      updatedList: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
    },
    {
      oldList: [],
      newList: [{ id: 3 }, { id: 4 }, { id: 5 }],
      updatedList: [{ id: 3 }, { id: 4 }, { id: 5 }]
    },
    {
      oldList: [{ id: 1 }, { id: 2 }, { id: 3 }],
      newList: [],
      updatedList: [{ id: 1 }, { id: 2 }, { id: 3 }]
    },
  ].map(({ oldList, newList, updatedList }, index) => {
    it(`should return the 'unionList' (index:${index})`, () => {
      expect(dashboardUtil.unionList(List(Item)(oldList), List(Item)(newList)).toJS()).toEqual(updatedList);
    });
  });
});
