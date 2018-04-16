import { createAction } from 'redux-actions';
import { CHANGE_MERCHANT, SET_MERCHANTS } from '../../const/action-types';

const changeMerchant = createAction(
  CHANGE_MERCHANT,
  selectedMerchant => selectedMerchant,
);

/**
 * DO NOT use directly
 */
const setMerchants = createAction(
  SET_MERCHANTS,
  merchants => merchants
);

export { changeMerchant, setMerchants };
