import { createAction } from 'redux-actions';
import { CHANGE_LOCATION } from "../../const/action-types";

const changeLocation = createAction(
  CHANGE_LOCATION,
  (selectedLocation) => ({ selectedLocation })
);

export { changeLocation };
