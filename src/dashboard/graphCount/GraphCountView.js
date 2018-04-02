import {connect} from 'react-redux';

import GraphCount from './ui/GraphCount';
import {changeGraphDisplayType} from "./graphCountActions";

const mapStateToProps = (state) => {
  return {
    graphData: state.getIn(['graphCount', 'graphData']),
    displayTypeData: state.getIn(['graphCount', 'displayTypeData']),
    displayOptions: state.getIn(['graphCount', 'displayOptions'])
  };
};

const mapStateToDispatch = (dispatch) => {
  return {
    onClickDisplayType: ({displayType}) => dispatch(changeGraphDisplayType(displayType))
  };
};

const GraphCountView = connect(
  mapStateToProps,
  mapStateToDispatch
)(GraphCount);

export default GraphCountView;
