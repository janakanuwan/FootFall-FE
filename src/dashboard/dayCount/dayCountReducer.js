import { createReducer } from 'redux-create-reducer';
import { Record } from 'Models';
import { SET_DAY_COUNT } from "../../const/action-types";

import dashboardUtil from '../dashboardUtil';

const initialState = Record({
  dayName: String('Today'),
  date: String(dashboardUtil.todayWithTime()),
  count: Number(0)
}, 'DayCountState')();

const dayCountReducer = createReducer(initialState, {

  [SET_DAY_COUNT](state, action) {
    return state.withMutations(state => {
        if (action.payload.dayName) {
          state.set('dayName', action.payload.dayName);
        }
        if (action.payload.date) {
          state.set('date', action.payload.date);
        }
        if (action.payload.count) {
          state.set('count', action.payload.count)
        }
      }
    );
  }

});


export default dayCountReducer;
