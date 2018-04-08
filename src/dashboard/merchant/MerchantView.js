import { connect } from 'react-redux';

import MerchantOverview from './ui/MerchantOverview';
import { changeMerchant } from './merchantActions';

const mapStateToProps = (state) => {
  const merchants = state.getIn(['dashboard', 'merchants']);
  return {
    merchantList: merchants.get('list'),
    selectedMerchant: merchants.get('selectedMerchant'),
  };
};

const mapDispatchToProps = dispatch => ({
  onSelect: merchant => dispatch(changeMerchant(merchant)),
});

const MerchantView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MerchantOverview);

export default MerchantView;

