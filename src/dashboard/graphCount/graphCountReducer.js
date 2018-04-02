import {createReducer} from 'redux-create-reducer';

import {CHANGE_GRAPH_DISPLAY_TYPE, SET_GRAPH_DATA} from "../../const/action-types";

import {GraphData, GraphDisplayTypeData, List, Record} from 'Models';

const initialState = Record({
  displayTypeData: GraphDisplayTypeData({in: true, out: true, presence: true}),
  graphData: List(GraphData),
}, 'GraphState')();

const graphReducer = createReducer(initialState, {

  [CHANGE_GRAPH_DISPLAY_TYPE](state, action) {
    switch (action.payload.displayType) {
      case 'IN':
        return state.setIn(['displayTypeData', 'in'], !state.getIn(['displayTypeData', 'in']));
      case 'OUT':
        return state.setIn(['displayTypeData', 'out'], !state.getIn(['displayTypeData', 'out']));
      case 'PRESENCE':
        return state.setIn(['displayTypeData', 'presence'], !state.getIn(['displayTypeData', 'presence']));
      default:
        return state;
    }
  },
  [SET_GRAPH_DATA](state, action) {
    return state.set('graphData', action.payload.graphData);
  }

});

export default graphReducer;
