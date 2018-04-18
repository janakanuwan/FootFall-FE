import { createAction } from 'redux-actions';
import { CHANGE_MERCHANT, FETCH_MERCHANTS, SET_MERCHANTS } from '../../const/action-types';

const changeMerchant = createAction(
  CHANGE_MERCHANT,
  selectedMerchant => selectedMerchant,
);

const setMerchants = createAction(
  SET_MERCHANTS,
  merchantsResponse => merchantsResponse,
);

/**
 * async call to api {@link userFlowMiddleware}
 */
const fetchMerchants = createAction(
  FETCH_MERCHANTS,
  authInfo => authInfo,
);

export { changeMerchant, setMerchants, fetchMerchants };
