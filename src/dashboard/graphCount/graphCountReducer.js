import { createReducer } from 'redux-create-reducer';

import {
  CHANGE_GRAPH_DATE_RANGE,
  CHANGE_GRAPH_DISPLAY_OPTION,
  CHANGE_GRAPH_DISPLAY_TYPE,
} from '../../const/action-types';

import { GraphDisplayTypeData, Record } from 'Models';
import GraphDateRange from '../../app/models/graph/GraphDateRange.model';

import { GraphDisplayOptions, GraphDisplayTypes } from './graphCountConstants';

import graphCountManager from './graphCountManager';
import dateTimeUtil from '../../app/utils/dateTimeUtil';

const Today = dateTimeUtil.formatDateTime(dateTimeUtil.now(), 'YYYY-MM-DD');

const initialState = Record({
  displayTypeData: GraphDisplayTypeData({ in: true, out: true, presence: true }),
  dateRange: GraphDateRange({
    fromDate: Today, toDate: Today, fromDateMax: Today, toDateMin: Today, toDateMax: Today,
  }),
  displayOption: String(GraphDisplayOptions[0]),
}, 'GraphState')();


const graphReducer = createReducer(initialState, {

  [CHANGE_GRAPH_DISPLAY_TYPE](state, action) {
    const type = action.payload;
    if (GraphDisplayTypes.includes(type)) {
      return state.setIn(['displayTypeData', type], !state.getIn(['displayTypeData', type]));
    }
    return state;
  },

  [CHANGE_GRAPH_DATE_RANGE](state, action) {
    const { type, date } = action.payload;
    const dateRange = state.get('dateRange');

    let updatedState = state;
    if (graphCountManager.isValidDateRange(dateRange, type, date)) {
      const updatedValues = graphCountManager.updatedDateRangeValues(dateRange, type, date);
      updatedValues.forEach((values) => {
        Object.entries(values).forEach(([key, value]) => {
          updatedState = updatedState.setIn(['dateRange', key], value);
        });
      });
    }
    return updatedState;
  },

  [CHANGE_GRAPH_DISPLAY_OPTION](state, action) {
    const option = action.payload;
    if (GraphDisplayOptions.includes(option)) {
      return state.set('displayOption', option);
    }
    return state;
  },

});

export default graphReducer;
