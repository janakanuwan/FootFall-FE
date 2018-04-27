import { createAction } from 'redux-actions';
import { ADD_ENTRIES, CHANGE_ENTRIES_RANGE, FETCH_ENTRIES } from '../../const/action-types';

const changeEntriesRange = createAction(
  CHANGE_ENTRIES_RANGE,
  range => range,
);

const addEntries = createAction(
  ADD_ENTRIES,
  entries => entries,
);

/**
 * async call to api {@link userFlowMiddleware}
 */
const fetchEntries = createAction(
  FETCH_ENTRIES,
  merchantLocationAuthInfo => merchantLocationAuthInfo,
);

export { changeEntriesRange, addEntries, fetchEntries };
