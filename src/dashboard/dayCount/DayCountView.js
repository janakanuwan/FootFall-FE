import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import DayCount from './ui/DayCount';
import dateTimeUtil from '../../app/utils/dateTimeUtil';
import entriesUtil from '../../app/utils/entriesUtil';

const getEntriesList = state => state.getIn(['dashboard', 'entries', 'list']);
const getSelectedLocation = state => state.getIn(['dashboard', 'locations', 'selected']);
const getTodayTo = state => state.getIn(['dashboard', 'entries', 'range', 'to']);
const getTodayFrom = () => dateTimeUtil.millisStartOfDay(dateTimeUtil.now());

const netEntrySelector = createSelector(
  [getEntriesList, getSelectedLocation, getTodayFrom, getTodayTo],
  (entries, location, fromTime, toTime) => {
    if (entries.size > 0 && location) {
      return entriesUtil.netEntry(entriesUtil.filteredEntries(entries, location, fromTime, toTime));
    }
    return 0;
  },
);

const mapStateToProps = (state) => {
  const date = getTodayTo(state);
  return {
    dayName: 'Today',
    day: dateTimeUtil.formatDateTime(date, 'dddd, MMMM Do YYYY'),
    time: dateTimeUtil.formatDateTime(date, 'h:mm A'),
    count: netEntrySelector(state),
  };
};

const DayCountView = connect(mapStateToProps)(DayCount);

export default DayCountView;
