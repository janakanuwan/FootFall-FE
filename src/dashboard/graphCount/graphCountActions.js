import { createAction } from 'redux-actions';

import {
  CHANGE_GRAPH_DATE_RANGE,
  CHANGE_GRAPH_DISPLAY_OPTION,
  CHANGE_GRAPH_DISPLAY_TYPE,
  SET_GRAPH_DATA,
} from '../../const/action-types';

const changeGraphDisplayType = createAction(
  CHANGE_GRAPH_DISPLAY_TYPE,
  displayType => ({ displayType }),
);

const setGraphData = createAction(
  SET_GRAPH_DATA,
  graphData => ({ graphData }),
);

const changeGraphDateRange = createAction(
  CHANGE_GRAPH_DATE_RANGE,
  graphDateRange => ({ graphDateRange }),
);

const changeGraphDisplayOption = createAction(
  CHANGE_GRAPH_DISPLAY_OPTION,
  displayOption => ({ displayOption }),
);

export { changeGraphDisplayType, setGraphData, changeGraphDateRange, changeGraphDisplayOption };
