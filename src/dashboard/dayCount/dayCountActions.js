import { createAction } from 'redux-actions';
import { SET_DAY_COUNT } from "../../const/action-types";

const setDayCount = createAction(
  SET_DAY_COUNT,
  ({ dayName, date, count }) => ({ dayName, date, count })
);

export { setDayCount };
