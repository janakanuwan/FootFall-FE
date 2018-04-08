import { createReducer } from 'redux-create-reducer';
import { List, Location, Maybe, Record } from 'Models';

import { CHANGE_LOCATION } from "../../const/action-types";

const initialState = Record({
  list: List(Location),
  selectedLocation: Maybe(Location)
}, 'LocationState')();

const locationReducer = createReducer(initialState, {

  [CHANGE_LOCATION](state, action) {
    return state.set('selectedLocation', action.payload.selectedLocation);
  }

});

export default locationReducer;
