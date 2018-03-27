import {createReducer} from 'redux-create-reducer';

import {CHANGE_LOCATION} from "../../const/action-types";

const initialState = {
  // FIXME
  list: [
    {
      id: 1,
      name: 'Location 1'
    },
    {
      id: 2,
      name: 'Location 2'
    },
    {
      id: 3,
      name: 'Location 3'
    }
  ],
  selectedLocation: null
};

const locationReducer = createReducer(initialState, {

  [CHANGE_LOCATION](state, action) {
    return Object.assign({}, state, {selectedLocation: action.payload.selectedLocation});
  }

});

export default locationReducer;
