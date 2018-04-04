import {createAction} from 'redux-actions';

import {CHANGE_GRAPH_DATE_RANGE, CHANGE_GRAPH_DISPLAY_TYPE, SET_GRAPH_DATA} from "../../const/action-types";

const changeGraphDisplayType = createAction(
  CHANGE_GRAPH_DISPLAY_TYPE,
  (displayType) => ({displayType})
);

const setGraphData = createAction(
  SET_GRAPH_DATA,
  (graphData) => ({graphData})
);

const changeGraphDateRange = createAction(
  CHANGE_GRAPH_DATE_RANGE,
  (graphDateRange) => ({graphDateRange})
);

export {changeGraphDisplayType, setGraphData, changeGraphDateRange};
