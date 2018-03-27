import {createReducer} from 'redux-create-reducer';
import {CHANGE_MERCHANT} from "../../const/action-types";

const initialState = {
  list: [],
  selectedMerchant: null
};

const merchantReducer = createReducer(initialState, {

  [CHANGE_MERCHANT](state, action) {
    return Object.assign({}, state, {selectedMerchant: action.payload.selectedMerchant});
  },

});

export default merchantReducer;
