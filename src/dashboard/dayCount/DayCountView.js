import { connect } from 'react-redux';

import DayCount from './ui/DayCount';
import dateTimeUtil from '../../app/utils/dateTimeUtil';

const mapStateToProps = (state) => {

  const todayBegin = dateTimeUtil.today0000h();
  const todayTo = state.getIn(['dashboard', 'entries', 'range', 'to']);
  const selectedLocation = state.getIn(['dashboard', 'locations', 'selected']);

  console.log(todayBegin, todayTo, selectedLocation);



  const dayCount = state.getIn(['dashboard', 'dayCount']);
  const date = dayCount.get('date');
  return {
    dayName: dayCount.get('dayName'),
    day: dateTimeUtil.formatDate(date),
    time: dateTimeUtil.formatTime(date),
    count: dayCount.get('count'),
  };
};

const DayCountView = connect(mapStateToProps)(DayCount);

export default DayCountView;
