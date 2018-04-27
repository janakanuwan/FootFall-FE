import { createReducer } from 'redux-create-reducer';
import { Entry, List, Record } from 'Models';
import immutableUtil from '../../app/utils/immutableUtil';
import dateTimeUtil from '../../app/utils/dateTimeUtil';
import { ADD_ENTRIES, CHANGE_ENTRIES_RANGE } from '../../const/action-types';
import entriesManager from './entriesManager';

const oneMonthBeforeTime = dateTimeUtil.oneMonthBefore();
const nowTime = dateTimeUtil.now();

const initialState = Record({
  range: Record({
    from: Number(oneMonthBeforeTime),
    to: Number(nowTime),
  })(),
  list: List(Entry),
}, 'EntriesState')();

const entriesReducer = createReducer(initialState, {

  [CHANGE_ENTRIES_RANGE](state, action) {
    return state.set('range', entriesManager.updatedRange(state.get('range'), action.payload));
  },

  [ADD_ENTRIES](state, action) {
    if (!action.error) {
      return state.set('list', immutableUtil.unionList(state.get('list'), action.payload));
    }
    return state;
  },

});

export default entriesReducer;
