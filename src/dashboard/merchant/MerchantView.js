import {connect} from 'react-redux';

import MerchantOverview from './ui/MerchantOverview';
import {changeMerchant} from "./merchantActions";

const mapStateToProps = state => {
  return {
    merchantList: state.merchants,
    selectedMerchant: state.selectedMerchant
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelect: (merchant) => {
      dispatch(changeMerchant(merchant));
    }
  }
};

const MerchantView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MerchantOverview);

export default MerchantView;



