import { connect } from 'react-redux';

import DayCount from './ui/DayCount';

const mapStateToProps = (state) => {
  const dayCount = state.getIn(['dashboard', 'dayCount']);
  return {
    dayName: dayCount.get('dayName'),
    date: dayCount.get('date'),
    count: dayCount.get('count'),
  };
};

const DayCountView = connect(mapStateToProps)(DayCount);

export default DayCountView;
