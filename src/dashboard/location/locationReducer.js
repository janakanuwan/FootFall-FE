import { createReducer } from 'redux-create-reducer';
import { List, Location, Maybe, Record } from 'Models';

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
      const newLocations = action.payload;
      const newLocationsIds = newLocations.reduce((acc, curr) => [...acc, curr.id], []);

      const updatedLocations = state.get('list')
        .filter(location => !newLocationsIds.includes(location.id))
        .withMutations((locations) => {
          newLocations.forEach(location => locations.push(location));
        });

      return state.set('list', updatedLocations);
    }
    return state;
  },

});

export default locationReducer;
