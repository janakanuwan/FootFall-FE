import {connect} from 'react-redux';

import MerchantOverview from './ui/MerchantOverview';
import {changeMerchant} from "./merchantActions";

const mapStateToProps = state => {
  return {
    merchantList: state.list,
    selectedIndex: state.selectedIndex
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelect: ({merchant, index}) => {
      dispatch(changeMerchant(index, merchant));
    }
  }
};

const MerchantView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MerchantOverview);

export default MerchantView;



