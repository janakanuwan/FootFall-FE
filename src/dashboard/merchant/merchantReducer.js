import { createReducer } from 'redux-create-reducer';
import { CHANGE_MERCHANT, SET_MERCHANTS } from '../../const/action-types';
import { List, Maybe, Merchant, Record } from 'Models';

const initialState = Record({
  list: List(Merchant),
  selected: Maybe(Merchant),
}, 'MerchantState')();

const merchantReducer = createReducer(initialState, {

  [CHANGE_MERCHANT](state, action) {
    return state.set('selected', action.payload);
  },

  [SET_MERCHANTS](state, action) {
    if (!action.error) {
      return state.set('list', action.payload);
    }
    return state;
  },

});

export default merchantReducer;
