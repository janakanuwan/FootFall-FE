import {createReducer} from 'redux-create-reducer';
import {CHANGE_MERCHANT} from "../../const/action-types";

const initialState = {
  merchants: [
    // FIXME,
    {
      id: 1,
      name: 'Test Merchant 1'
    },
    {
      id: 2,
      name: 'Test Merchant 2'
    }
  ],
  selectedMerchant: {
    id: 1,
    name: 'Test Merchant 1'
  }
};

const merchantReducer = createReducer(initialState, {

  [CHANGE_MERCHANT](state, action) {
    return Object.assign({}, state, {selectedMerchant: action.payload.selectedMerchant});
  },

});

export default merchantReducer;
