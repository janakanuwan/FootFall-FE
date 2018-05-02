import reducer from './graphCountReducer';

import moment from 'moment';

import { changeGraphDateRange, changeGraphDisplayOption, changeGraphDisplayType, } from './graphCountActions';

import { GraphDisplayOptions, GraphDisplayTypes } from './graphCountConstants';

describe('graphReducer', () => {
  const initialState = reducer(undefined, { type: 'INIT' });

  const today = moment().format('YYYY-MM-DD');
  const tomorrow = moment().add(1, 'days').format('YYYY-MM-DD');
  const yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD');

  it('should set the state with default values', () => {
    const expected = {
      displayTypeData: { in: true, out: true, presence: true },
      dateRange: {
        fromDate: today,
        toDate: today,
        fromDateMax: today,
        toDateMin: today,
        toDateMax: today,
        fromDateMin: null,
      },
      displayOption: 'hourly',
    };

    expect(initialState.toJS()).toEqual(expected);
  });


  [
    {
      state: initialState,
      action: changeGraphDisplayType(GraphDisplayTypes[0]),
      expected: { in: false, out: true, presence: true },
    },
    {
      state: reducer(initialState, changeGraphDisplayType(GraphDisplayTypes[0])),
      action: changeGraphDisplayType(GraphDisplayTypes[0]),
      expected: { in: true, out: true, presence: true },
    },
    {
      state: initialState,
      action: changeGraphDisplayType(GraphDisplayTypes[1]),
      expected: { in: true, out: false, presence: true },
    },
    {
      state: reducer(initialState, changeGraphDisplayType(GraphDisplayTypes[1])),
      action: changeGraphDisplayType(GraphDisplayTypes[1]),
      expected: { in: true, out: true, presence: true },
    },
    {
      state: initialState,
      action: changeGraphDisplayType(GraphDisplayTypes[2]),
      expected: { in: true, out: true, presence: false },
    },
    {
      state: reducer(initialState, changeGraphDisplayType(GraphDisplayTypes[2])),
      action: changeGraphDisplayType(GraphDisplayTypes[2]),
      expected: { in: true, out: true, presence: true },
    },
  ].forEach(({ state, action, expected }, index) => {
    it(`should change the displayTypeData based on changeDisplayType (index:${index})`, () => {
      expect(reducer(state, action).get('displayTypeData').toJS()).toEqual(expected);
    });
  });

  [
    {
      action: changeGraphDateRange({ type: 'from', date: yesterday }),
      expected: {
        fromDate: yesterday,
        toDate: today,
        fromDateMax: today,
        toDateMin: yesterday,
        toDateMax: today,
        fromDateMin: null,
      },
    },
    {
      action: changeGraphDateRange({ type: 'to', date: tomorrow }),
      expected: {
        fromDate: today,
        toDate: tomorrow,
        fromDateMax: tomorrow,
        toDateMin: today,
        toDateMax: today,
        fromDateMin: null,
      },
    },
  ].forEach(({ action, expected }, index) => {
    it(`should change the date range (index:${index})`, () => {
      expect(reducer(initialState, action).get('dateRange').toJS()).toEqual(expected);
    });
  });

  [
    {
      action: changeGraphDisplayOption(GraphDisplayOptions[1]),
      expected: 'day',
    },
    {
      action: changeGraphDisplayOption('minute'),
      expected: 'hourly',
    },
  ].forEach(({ action, expected }, index) => {
    it(`should change the graph display option (index:${index})`, () => {
      expect(reducer(initialState, action).get('displayOption')).toEqual(expected);
    });
  });


  it('should not change the state for unsupported action', () => {
    const action = { type: 'UNSUPPORTED_ACTION_TYPE' };

    expect(reducer(initialState, action)).toBe(initialState);
  });
});
