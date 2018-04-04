import {connect} from 'react-redux';

import GraphCount from './ui/GraphCount';
import {changeGraphDateRange, changeGraphDisplayType} from "./graphCountActions";

const mapStateToProps = (state) => {
  return {
    graphData: state.getIn(['graphCount', 'graphData']),
    displayTypeData: state.getIn(['graphCount', 'displayTypeData']),
    displayOptions: state.getIn(['graphCount', 'displayOptions']),
    dateRange: state.getIn(['graphCount', 'dateRange']),
  };
};

const mapStateToDispatch = (dispatch) => {
  return {
    onClickDisplayType: ({displayType}) => dispatch(changeGraphDisplayType(displayType)),
    onChangeDate: (graphDateRange) => dispatch(changeGraphDateRange(graphDateRange)),
  };
};

const GraphCountView = connect(
  mapStateToProps,
  mapStateToDispatch
)(GraphCount);

export default GraphCountView;
