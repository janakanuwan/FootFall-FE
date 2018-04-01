import {connect} from 'react-redux';

import MerchantLocation from './ui/MerchantLocation';
import {changeLocation} from "./locationActions";

const mapStateToProps = (state) => {
  return {
    locationList: state.getIn(['locations', 'list']),
    selectedLocation: state.getIn(['locations', 'selectedLocation'])
  }
};

const mapStateToDispatch = dispatch => {
  return {
    onClick: (location) => dispatch(changeLocation(location))
  };
};

const LocationView = connect(
  mapStateToProps,
  mapStateToDispatch
)(MerchantLocation);

export default LocationView;
