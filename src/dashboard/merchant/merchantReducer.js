import { createReducer } from 'redux-create-reducer';
import { CHANGE_MERCHANT } from '../../const/action-types';
import { List, Maybe, Merchant, Record } from 'Models';

const initialState = Record({
  list: List(Merchant),
  selectedMerchant: Maybe(Merchant),
}, 'MerchantState')();

const merchantReducer = createReducer(initialState, {

  [CHANGE_MERCHANT](state, action) {
    return state.set('selectedMerchant', action.payload);
  },

});

export default merchantReducer;
