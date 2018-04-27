import { createReducer } from 'redux-create-reducer';
import { List, Location, Maybe, Record } from 'Models';
import immutableUtil from '../../app/utils/immutableUtil';

import { ADD_LOCATIONS, CHANGE_LOCATION } from '../../const/action-types';

const initialState = Record({
  list: List(Location),
  selectedLocation: Maybe(Location),
}, 'LocationState')();

const locationReducer = createReducer(initialState, {

  [CHANGE_LOCATION](state, action) {
    return state.set('selectedLocation', action.payload);
  },

  [ADD_LOCATIONS](state, action) {
    if (!action.error) {
      return state.set('list', immutableUtil.unionList(state.get('list'), action.payload));
    }
    return state;
  },

});

export default locationReducer;
