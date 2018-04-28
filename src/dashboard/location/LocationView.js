import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { List, Location } from 'Models';

import MerchantLocation from './ui/MerchantLocation';
import { changeLocation } from './locationActions';

const getLocationsList = state => state.getIn(['dashboard', 'locations', 'list']);
const getSelectedLocation = state => state.getIn(['dashboard', 'locations', 'selected']);

const getSelectedMerchant = state => state.getIn(['dashboard', 'merchants', 'selected']);

const locationsSelector = createSelector(
  [getLocationsList, getSelectedMerchant],
  (locations, merchant) => {
    if (locations.size > 0 && merchant) {
      return locations.filter(location => location.merchantId === merchant.id);
    }
    return List(Location)();
  },
);

const mapStateToProps = state => ({
  locationList: locationsSelector(state),
  selectedLocation: getSelectedLocation(state),
});

const mapStateToDispatch = dispatch => ({
  onClick: location => dispatch(changeLocation(location)),
});

const LocationView = connect(
  mapStateToProps,
  mapStateToDispatch,
)(MerchantLocation);

export default LocationView;
