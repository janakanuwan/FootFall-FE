import {createReducer} from 'redux-create-reducer';

import {
  CHANGE_GRAPH_DATE_RANGE,
  CHANGE_GRAPH_DISPLAY_OPTION,
  CHANGE_GRAPH_DISPLAY_TYPE,
  SET_GRAPH_DATA
} from "../../const/action-types";

import {GraphData, GraphDisplayTypeData, List, Record} from 'Models';
import GraphDateRange from "../../app/models/graph/GraphDateRange.model";

import {GraphDisplayOptions, GraphDisplayTypes} from "./graphCountConstants";

import graphCountManager from './graphCountManager';
import dashboardUtil from '../dashboardUtil';

const Today = dashboardUtil.today();

const initialState = Record({
  displayTypeData: GraphDisplayTypeData({in: true, out: true, presence: true}),
  graphData: List(GraphData),
  dateRange: GraphDateRange({fromDate: Today, toDate: Today, fromDateMax: Today, toDateMin: Today, toDateMax: Today}),
  displayOption: String(GraphDisplayOptions[0]),
}, 'GraphState')();


const graphReducer = createReducer(initialState, {

  [CHANGE_GRAPH_DISPLAY_TYPE](state, action) {
    const type = action.payload.displayType;
    if (GraphDisplayTypes.includes(type)) {
      return state.setIn(['displayTypeData', type], !state.getIn(['displayTypeData', type]));
    }
    return state;
  },
  [SET_GRAPH_DATA](state, action) {
    return state.set('graphData', action.payload.graphData);
  },
  [CHANGE_GRAPH_DATE_RANGE](state, action) {
    const {type, date} = action.payload.graphDateRange;
    const dateRange = state.get('dateRange');

    if (graphCountManager.isValidDateRange(dateRange, type, date)) {
      const updatedValues = graphCountManager.getUpdatedDateRangeValues(dateRange, type, date);
      updatedValues.forEach(values => {
        Object.entries(values).forEach(([key, value]) => {
          state = state.setIn(['dateRange', key], value);
        });
      });
    }
    return state;
  },

  [CHANGE_GRAPH_DISPLAY_OPTION](state, action) {
    const option = action.payload.displayOption;
    if (GraphDisplayOptions.includes(option)) {
      return state.set('displayOption', option);
    }
    return state;
  }

});

export default graphReducer;