import {createReducer} from 'redux-create-reducer';

import {CHANGE_LOCATION} from "../../const/action-types";

const initialState = {
  list: [],
  selectedLocation: null
};

const locationReducer = createReducer(initialState, {

  [CHANGE_LOCATION](state, action) {
    return Object.assign({}, state, {selectedLocation: action.payload.selectedLocation});
  }

});

export default locationReducer;
