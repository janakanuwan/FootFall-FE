import { connect } from 'react-redux';

import MerchantLocation from './ui/MerchantLocation';
import { changeLocation } from './locationActions';

const mapStateToProps = (state) => {
  const locations = state.getIn(['dashboard', 'locations']);
  return {
    locationList: locations.get('list'),
    selectedLocation: locations.get('selected'),
  };
};

const mapStateToDispatch = dispatch => ({
  onClick: location => dispatch(changeLocation(location)),
});

const LocationView = connect(
  mapStateToProps,
  mapStateToDispatch,
)(MerchantLocation);

export default LocationView;
