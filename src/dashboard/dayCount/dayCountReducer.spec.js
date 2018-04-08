import reducer from './dayCountReducer';
import { setDayCount } from "./dayCountActions";

describe('dayCountReducer', () => {

  const initialState = reducer(undefined, { Type: 'INIT' });

  it('should set the day count with default values', () => {
    const initialStateDate = initialState.get('date');
    const expected = { dayName: 'Today', date: initialStateDate, count: 0 };

    expect(initialState.toJS()).toEqual(expected);
    expect(new Date(initialStateDate).toDateString()).toEqual(new Date().toDateString());
  });

  it('should set the day count with all fields', () => {
    const action = setDayCount({ dayName: 'Yesterday', date: '2018-04-01', count: 50 });
    const expected = { dayName: 'Yesterday', date: '2018-04-01', count: 50 };

    expect(reducer(initialState, action).toJS()).toEqual(expected);
  });

  it('should set the day count with certain fields', () => {
    const action = setDayCount({ date: '2018-04-01T22:04:42' });
    const expected = { dayName: 'Today', date: '2018-04-01T22:04:42', count: 0 };

    expect(reducer(initialState, action).toJS()).toEqual(expected);
  });

  it('should not change the state for unsupported action', () => {
    const action = { type: 'UNSUPPORTED_ACTION_TYPE' };

    expect(reducer(initialState, action)).toBe(initialState);
  });

});
