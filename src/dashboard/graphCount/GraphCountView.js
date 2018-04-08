import {connect} from 'react-redux';

import GraphCount from './ui/GraphCount';
import {changeGraphDateRange, changeGraphDisplayOption, changeGraphDisplayType} from "./graphCountActions";

const mapStateToProps = (state) => {
  const graphCount = state.getIn(['dashboard', 'graphCount']);
  return {
    graphData: graphCount.get('graphData'),
    displayTypeData: graphCount.get('displayTypeData'),
    dateRange: graphCount.get('dateRange'),
    selectedDisplayOption: graphCount.get('displayOption'),
  };
};

const mapStateToDispatch = (dispatch) => {
  return {
    onClickDisplayType: ({displayType}) => dispatch(changeGraphDisplayType(displayType)),
    onChangeDate: (graphDateRange) => dispatch(changeGraphDateRange(graphDateRange)),
    onClickDisplayOption: (displayOption) => dispatch(changeGraphDisplayOption(displayOption)),
  };
};

const GraphCountView = connect(
  mapStateToProps,
  mapStateToDispatch
)(GraphCount);

export default GraphCountView;
