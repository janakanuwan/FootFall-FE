import {createReducer} from 'redux-create-reducer';
import {CHANGE_MERCHANT} from "../../const/action-types";

const initialState = {
  list: [
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
  selectedIndex: 0
};

const merchantReducer = createReducer(initialState, {

  [CHANGE_MERCHANT](merchants, action) {
    return Object.assign({}, merchants, {selectedIndex: action.payload.selectedIndex});
  },

});

export default merchantReducer;
