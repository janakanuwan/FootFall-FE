import reducer from './dashboardReducer';
import dashboardUtil from './dashboardUtil';

describe('reducer', () => {
  const today = dashboardUtil.today();


  it('should create initial state for unsupported action', () => {
    const action = { type: 'UNSUPPORTED_ACTION_TYPE' };
    const expected = {
      merchants: {
        list: [],
        selectedMerchant: null,
      },
      locations: {
        list: [],
        selectedLocation: null,
      },
      dayCount: {
        count: 0,
        date: dashboardUtil.todayWithTime(),
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
