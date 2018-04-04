import {connect} from 'react-redux';

import GraphCount from './ui/GraphCount';
import {changeGraphDateRange, changeGraphDisplayOption, changeGraphDisplayType} from "./graphCountActions";

const mapStateToProps = (state) => {
  return {
    graphData: state.getIn(['graphCount', 'graphData']),
    displayTypeData: state.getIn(['graphCount', 'displayTypeData']),
    dateRange: state.getIn(['graphCount', 'dateRange']),
    selectedDisplayOption: state.getIn(['graphCount', 'displayOption']),
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
