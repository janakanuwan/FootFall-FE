import {createAction} from 'redux-actions';
import {CHANGE_MERCHANT} from "../../const/action-types";

const changeMerchant = createAction(
  CHANGE_MERCHANT,
  (selectedIndex, selectedMerchant) => ({selectedIndex, selectedMerchant})
);

export {changeMerchant};
