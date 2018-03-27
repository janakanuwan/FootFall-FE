import dashboardReducer from "./dashboardReducer";

describe('dashboardReducer', () => {

  it('should create initial state for unsupported action', () => {
    const expected = {
      merchants: {
        list: [],
        selectedMerchant: null
      },
      locations: {
        list: [],
        selectedLocation: null
      }
    };
    const action = {type: 'UNSUPPORTED_ACTION_TYPE'};

    expect(dashboardReducer(undefined, action)).toEqual(expected);

  });

});
