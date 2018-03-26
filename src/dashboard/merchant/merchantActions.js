import {createAction} from 'redux-actions';
import {CHANGE_MERCHANT} from "../../const/action-types";

const changeMerchant = createAction(
  CHANGE_MERCHANT,
  (selectedMerchant) => ({selectedMerchant})
);

export {changeMerchant};
