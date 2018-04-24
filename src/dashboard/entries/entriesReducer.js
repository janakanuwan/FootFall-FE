import { createReducer } from 'redux-create-reducer';
import { Entry, List, Record } from 'Models';
import dashboardUtil from '../dashboardUtil';
import { ADD_ENTRIES, CHANGE_ENTRIES_FROM, CHANGE_ENTRIES_TO } from '../../const/action-types';

const nowTime = dashboardUtil.now();

const initialState = Record({
  from: Number(nowTime),
  to: Number(nowTime),
  list: List(Entry),
}, 'EntriesState')();

const entriesReducer = createReducer(initialState, {

  [CHANGE_ENTRIES_FROM](state, action) {
    return state.set('from', action.payload);
  },

  [CHANGE_ENTRIES_TO](state, action) {
    return state.set('to', action.payload);
  },

  [ADD_ENTRIES](state, action) {
    if (!action.error) {
      return state.set('list', dashboardUtil.unionList(state.get('list'), action.payload));
    }
    return state;
  },

});

export default entriesReducer;
