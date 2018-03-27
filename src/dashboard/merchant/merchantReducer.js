import {createReducer} from 'redux-create-reducer';
import {CHANGE_MERCHANT} from "../../const/action-types";

const initialState = {
  // FIXME
  list: [
    {
      id: 1,
      name: 'Test Merchant 1'
    },
    {
      id: 2,
      name: 'Test Merchant 2'
    }
  ],
  selectedMerchant: null
};

const merchantReducer = createReducer(initialState, {

  [CHANGE_MERCHANT](state, action) {
    return Object.assign({}, state, {selectedMerchant: action.payload.selectedMerchant});
  },

});

export default merchantReducer;
