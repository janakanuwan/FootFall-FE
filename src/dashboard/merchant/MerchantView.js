import {connect} from 'react-redux';

import MerchantOverview from './ui/MerchantOverview';
import {changeMerchant} from "./merchantActions";

const mapStateToProps = ({merchants}) => {
  return {
    merchantList: merchants.list,
    selectedMerchant: merchants.selectedMerchant
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelect: (merchant) => dispatch(changeMerchant(merchant))
  }
};

const MerchantView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MerchantOverview);

export default MerchantView;



