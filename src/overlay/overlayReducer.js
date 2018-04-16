import { createReducer } from 'redux-create-reducer';
import { List, OverlayData, Record } from 'Models';
import { HIDE_OVERLAY, SHOW_OVERLAY } from '../const/action-types';

const initialState = Record({
  list: List(OverlayData),
}, 'OverlayState')();

const overlayReducer = createReducer(initialState, {

  [SHOW_OVERLAY](state, action) {
    return state.set('list', state.get('list').filter(item => item.id !== action.payload.id).push(action.payload));
  },

  [HIDE_OVERLAY](state, action) {
    return state.set('list', state.get('list').filter(item => item.id !== action.payload.id));
  },

});

export default overlayReducer;
