import dateTimeUtil from '../../app/utils/dateTimeUtil';
import entriesUtil from '../../app/utils/entriesUtil';

/**
 *
 * @param dateRange object with 'fromData', 'fromDateMax', 'toDate', 'toDateMin' properties
 * @param type 'from' or 'to'
 * @param date in 'YYYY-MM-DD' format
 * @returns {boolean} true if valid
 */
const isValidDateRange = (dateRange, type, date) => {
  if (type === 'from') {
    return dateTimeUtil.isSameOrAfter(dateRange.toDate, date);
  } else if (type === 'to') {
    return dateTimeUtil.isSameOrAfter(date, dateRange.fromDate);
  }
  return false;
};

/**
 * NOTE: Use {@link deviceCountManager.isValidDateRange} before using this
 *
 * @param dateRange {object} with 'fromData', 'fromDateMax', 'toDate', 'toDateMin' properties
 * @param type 'from' or 'to'
 * @param date in 'YYYY-MM-DD' format
 * @returns {Array} with {param1: value1, param2: value2} format
 */
const updatedDateRangeValues = (dateRange, type, date) => {
  if (type === 'from') {
    return [{ fromDate: date }, { toDateMin: date }];
  } else if (type === 'to') {
    return [{ toDate: date }, { fromDateMax: date }];
  }
  return [];
};

/**
 * NOTE: This highly depends on the {@link GraphDisplayOptions}
 *
 * @param fromTime {number} inclusive
 * @param toTime {number} exclusive
 * @param displayOption {string} in {@link GraphDisplayOptions}
 * @return {string} formatted time ban range name
 */
const formatTimeBinRangeName = (fromTime, toTime, displayOption) => {
  switch (displayOption) {
    case 'hourly':
      return dateTimeUtil.formatDateTime(toTime, 'h:mm A');
    case 'day':
      return dateTimeUtil.formatDateTime(toTime - 1, 'MMM-DD');
    case 'week':
      return `${dateTimeUtil.formatDateTime(fromTime, 'MMM-DD')}:${dateTimeUtil.formatDateTime(toTime - 1, 'MMM-DD')}`;
    case 'month':
      return dateTimeUtil.formatDateTime(toTime - 1, 'MMM YYYY');
    default:
      return dateTimeUtil.formatDateTime(toTime, 'h:mm A');
  }
};

/**
 * NOTE: This highly depends on the {@link GraphDisplayOptions} and the {@link GraphData}
 *
 * @param entries {List} Entry with 'time' and 'locationId' properties
 * @param location {Location} with 'id' property
 * @param dateRange {object} with 'fromData' and 'toDate' properties
 * @param displayOption {string} in {@link GraphDisplayOptions}
 * @return {[GraphData]} the resulting {@link GraphData} array
 */
const computedGraphData = (entries, location, dateRange, displayOption = 'hourly') => {
  const graphData = [];

  if (entries.size > 0 && location) {
    const fromTime = dateTimeUtil.millisStartOfDay(dateRange.fromDate);
    const toTime = dateTimeUtil.millisEndOfDay(dateRange.toDate);
    const filteredByRange = entriesUtil.filteredEntries(entries, location, fromTime, toTime);
    const timeBinRange = dateTimeUtil.timeBinRange(fromTime, toTime, displayOption);

    for (let i = 0; i < timeBinRange.length - 1; i += 1) {
      const filteredByTime = entriesUtil.filteredEntriesByTime(
        filteredByRange
        , timeBinRange[i], timeBinRange[i + 1],
      );
      // console.log('Time:', dateTimeUtil.formatDateTime(timeBinRange[i+1]-1));
      graphData.push({
        NAME: formatTimeBinRangeName(timeBinRange[i], timeBinRange[i + 1], displayOption),
        IN: entriesUtil.sumEntry(filteredByTime),
        OUT: entriesUtil.sumExit(filteredByTime),
        PRESENCE: entriesUtil.netEntry(filteredByTime),
      });
    }
  }
  return graphData;
};


export default {
  isValidDateRange,
  updatedDateRangeValues,
  computedGraphData,
};
