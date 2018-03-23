import {formatDate, oneMonthBefore, today} from './DateRangePickerHelper';

describe('DateRangePicker', () => {

  describe('formatDate', () => {
    [new Date('2018-03-22'), new Date('2018-03-22T05:04:42')].forEach(param => {
      it(`should return the formatted date, ${param}`, () => {
        expect(formatDate(param)).toEqual('2018-03-22');
      });
    });

    [undefined, null, ''].forEach(param => {
      it(`should return empty if the input is invalid input, ${param}`, () => {
        expect(formatDate(param)).toEqual(undefined);
      });
    });
  });

  describe('today', () => {
    it('should return today', () => {
      expect(today()).toEqual(formatDate(new Date()));
    })
  });

  describe('oneMonthBefore', () => {
    it('should return one month before', () => {
      expect(oneMonthBefore()).not.toEqual(formatDate(new Date()));
    })
  });


});
