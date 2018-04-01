import {connect} from 'react-redux';

import DayCount from './ui/DayCount';

const mapStateToProps = (state) => {
  return {
    dayName: state.getIn(['dayCount', 'dayName']),
    date: state.getIn(['dayCount', 'date']),
    count: state.getIn(['dayCount', 'count']),
  };
};

const DayCountView = connect(
  mapStateToProps
)(DayCount);

export default DayCountView;
