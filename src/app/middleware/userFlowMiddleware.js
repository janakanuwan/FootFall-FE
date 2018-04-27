import {
  ADD_LOCATIONS,
  CHANGE_ENTRIES_RANGE,
  CHANGE_MERCHANT,
  FETCH_ENTRIES,
  FETCH_LOCATIONS,
  FETCH_MERCHANTS,
  FETCH_USER,
  SET_MERCHANTS,
  SET_USER,
} from '../../const/action-types';
import { hideOverlay, showOverlay } from '../../overlay/overlayActions';
import { setUser } from '../../auth/authActions';
import userService from '../repository/userService';
import {
  OVERLAY_DATA_FETCH_LOCATIONS,
  OVERLAY_DATA_FETCH_MERCHANTS,
  OVERLAY_DATA_FETCH_USER,
  overlayDataFetchEntries,
} from '../const/overlay-data';
import { changeMerchant, fetchMerchants, setMerchants } from '../../dashboard/merchant/merchantActions';
import { addLocations, changeLocation, fetchLocations } from '../../dashboard/location/locationActions';
import { addEntries, fetchEntries } from '../../dashboard/entries/entriesActions';

const stateAuthData = (state) => {
  const auth = state.get('auth');
  const token = auth.get('token');
  const id = auth.getIn(['user', 'id']);
  const email = auth.getIn(['user', 'email']);
  return { token, id, email };
};

const stateLocations = state => state.getIn(['dashboard', 'locations', 'list']);

const stateEntriesRange = (state) => {
  const range = state.getIn(['dashboard', 'entries', 'range']);
  return { from: range.from, to: range.to };
};

const userFlowMiddleware = ({ dispatch, getState }) => next => (action) => {
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

    case CHANGE_MERCHANT: {
      const merchantInfo = Object.assign(
        {}, stateAuthData(getState()),
        { merchantId: action.payload.id },
      );
      console.log('merchantInfo', merchantInfo);
      dispatch(fetchLocations(merchantInfo));
      break;
    }

    case FETCH_LOCATIONS:
      dispatch(showOverlay(OVERLAY_DATA_FETCH_LOCATIONS));
      userService.fetchLocations(action.payload, (locations) => {
        dispatch(addLocations(locations));
        dispatch(hideOverlay(OVERLAY_DATA_FETCH_LOCATIONS));
      });
      break;

    case ADD_LOCATIONS:
      // FIXME
      if (!action.error && action.payload.size > 0) {
        dispatch(changeLocation(action.payload.get(0)));

        const locationsAndRange = Object.assign(
          {}, { locations: action.payload },
          stateEntriesRange(getState()),
        );
        dispatch(fetchEntries(locationsAndRange));
      }
      break;

    case CHANGE_ENTRIES_RANGE: {
      const locationsAndRange = Object.assign(
        {}
        , stateLocations(getState()), action.payload,
      );
      dispatch(fetchEntries(locationsAndRange));
      break;
    }

    case FETCH_ENTRIES: {
      const authInfo = stateAuthData(getState());
      const { locations, from, to } = action.payload;
      locations.forEach((location) => {
        const locationInfo = Object.assign(
          {}, authInfo,
          {
            fromTime: from, toTime: to, locationId: location.id, merchantId: location.merchantId,
          },
        );
        console.log(locationInfo);

        const overlayDataLocation = overlayDataFetchEntries(location);
        dispatch(showOverlay(overlayDataLocation));
        userService.fetchEntries(locationInfo, (entries) => {
          dispatch(addEntries(entries));
          dispatch(hideOverlay(overlayDataLocation));
        });
      });

      break;
    }

    // no default
  }

  // NOTE: certain actions need to be passed to certain reducers
  next(action);
};

export default userFlowMiddleware;
