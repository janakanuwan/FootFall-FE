import {formatDate, formatTime} from './DayCountHelper';

describe('DayCountHelper', () => {

  [undefined, null, ''].forEach(param => {
    it(`should return empty if the input is invalid, ${param}`, () => {
      expect(formatDate(param)).toEqual('');
      expect(formatTime(param)).toEqual('');
    });
  });
  [new Date('2018-03-21'), new Date('2018-03-21T05:04:42')].forEach(param => {
    it(`should return the formatted output for \'${param}\'`, () => {
      expect(formatDate(param)).toEqual('Wednesday, March 21st 2018');
      expect(formatTime(param)).toMatchSnapshot();
    });
  });

});
