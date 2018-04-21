import { createAction } from 'redux-actions';
import { ADD_LOCATIONS, CHANGE_LOCATION, FETCH_LOCATIONS } from '../../const/action-types';

const changeLocation = createAction(
  CHANGE_LOCATION,
  selectedLocation => selectedLocation,
);

const addLocations = createAction(
  ADD_LOCATIONS,
  locations => locations,
);

/**
 * async call to api {@link userFlowMiddleware}
 */
const fetchLocations = createAction(
  FETCH_LOCATIONS,
  merchantAuthInfo => merchantAuthInfo,
);

export { changeLocation, addLocations, fetchLocations };
