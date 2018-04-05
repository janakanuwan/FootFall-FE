import dashboardUtil from '../dashboardUtil';

/**
 *
 * @param dateRange object with 'fromData', 'fromDateMax', 'toDate', 'toDateMin' properties
 * @param type 'from' or 'to'
 * @param date in 'YYYY-MM-DD' format
 * @returns {boolean} true if valid
 */
const isValidDateRange = (dateRange, type, date) => {
  if('from' === type){
    return dashboardUtil.isSameOrAfter(dateRange.toDate, date);
  }else if('to' === type){
    return dashboardUtil.isSameOrAfter(date, dateRange.fromDate);
  }
  return false;
};

/**
 * NOTE: Use {@link deviceCountManager.isValidDateRange} before using this
 *
 * @param dateRange object with 'fromData', 'fromDateMax', 'toDate', 'toDateMin' properties
 * @param type 'from' or 'to'
 * @param date in 'YYYY-MM-DD' format
 * @returns {Array} with {param1: value1, param2: value2} format
 */
const getUpdatedDateRangeValues = (dateRange, type, date) => {
  if('from' === type){
    return [{fromDate: date}, {toDateMin: date}];
  }else if('to' === type){
    return [{toDate: date}, {fromDateMax: date}];
  }
  return [];
};


export default {
  isValidDateRange,
  getUpdatedDateRangeValues
}
