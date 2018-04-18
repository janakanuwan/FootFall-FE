import { FETCH_MERCHANTS, FETCH_USER, SET_MERCHANTS, SET_USER } from '../../const/action-types';
import { hideOverlay, showOverlay } from '../../overlay/overlayActions';
import { setUser } from '../../auth/authActions';
import userService from '../repository/userService';
import { OVERLAY_DATA_FETCH_MERCHANTS, OVERLAY_DATA_FETCH_USER } from '../const/overlay-data';
import { changeMerchant, fetchMerchants, setMerchants } from '../../dashboard/merchant/merchantActions';

const userFlowMiddleware = ({ dispatch }) => next => (action) => {
  switch (action.type) {
    case FETCH_USER:
      dispatch(showOverlay(OVERLAY_DATA_FETCH_USER));
      userService.fetchUser(action.payload, (user) => {
        dispatch(setUser(user));
        dispatch(hideOverlay(OVERLAY_DATA_FETCH_USER));
      });
      break;

    case SET_USER:
      if (!action.error) {
        const { token, user: { id, email } } = action.payload;
        dispatch(fetchMerchants({ token, id, email }));
      }
      break;

    case FETCH_MERCHANTS:
      dispatch(showOverlay(OVERLAY_DATA_FETCH_MERCHANTS));
      userService.fetchMerchants(action.payload, (merchants) => {
        dispatch(setMerchants(merchants));
        dispatch(hideOverlay(OVERLAY_DATA_FETCH_MERCHANTS));
      });
      break;

    case SET_MERCHANTS:
      if (!action.error && action.payload.size > 0) {
        dispatch(changeMerchant(action.payload.get(0)));
      }
      break;

    // no default
  }

  // NOTE: certain actions need to be passed to certain reducers
  next(action);
};

export default userFlowMiddleware;
