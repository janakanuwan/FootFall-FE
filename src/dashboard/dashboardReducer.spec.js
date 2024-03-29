import reducer from './dashboardReducer';

describe('reducer', () => {
  const today = '2018-05-01';

  it('should create initial state for unsupported action', () => {
    const action = { type: 'UNSUPPORTED_ACTION_TYPE' };
    const expected = {
      merchants: {
        list: [],
        selected: null,
      },
      locations: {
        list: [],
        selected: null,
      },
      dayCount: {
        count: 0,
        day: '',
        time: '',
        dayName: 'Today',
      },

      graphCount: {
        displayTypeData: {
          in: true,
          out: true,
          presence: true,
        },
        graphData: [],
        dateRange: {
          fromDate: today,
          fromDateMax: today,
          fromDateMin: null,
          toDate: today,
          toDateMax: today,
          toDateMin: today,
        },
        displayOption: 'hourly',
      },
    };

    expect(reducer(undefined, action).toJS()).toEqual(expected);
  });
});
