import { setDayCount } from "./dayCountActions";

describe('dayCountActions', () => {
  it('should create an action for set day count', () => {
    expect(setDayCount({ dayName: 'Today', date: '2018-04-01', count: 0 })).toMatchSnapshot();
  });
});
