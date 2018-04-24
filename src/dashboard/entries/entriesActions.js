import { createAction } from 'redux-actions';
import { ADD_ENTRIES, CHANGE_ENTRIES_FROM, CHANGE_ENTRIES_TO } from '../../const/action-types';

const changeEntriesFrom = createAction(
  CHANGE_ENTRIES_FROM,
  time => time,
);

const changeEntriesTo = createAction(
  CHANGE_ENTRIES_TO,
  time => time,
);

const addEntries = createAction(
  ADD_ENTRIES,
  data => data,
);

export { changeEntriesFrom, changeEntriesTo, addEntries };
