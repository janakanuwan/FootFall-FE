import { createReducer } from 'redux-create-reducer';
import { Record } from 'Models';
import { SET_DAY_COUNT } from '../../const/action-types';

import dashboardUtil from '../dashboardUtil';

const initialState = Record({
  dayName: String('Today'),
  date: String(dashboardUtil.todayWithTime()),
  count: Number(0),
}, 'DayCountState')();

const dayCountReducer = createReducer(initialState, {

  [SET_DAY_COUNT](state, action) {
    return state.withMutations((updatedState) => {
      if (action.payload.dayName) {
        updatedState.set('dayName', action.payload.dayName);
      }
      if (action.payload.date) {
        updatedState.set('date', action.payload.date);
      }
      if (action.payload.count) {
        updatedState.set('count', action.payload.count);
      }
    });
  },

});


export default dayCountReducer;
