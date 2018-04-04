import moment from 'moment';

/**
 *
 * @returns {string} today in "YYYY-MM-DD" format
 */
const today = () => {
  return moment().format('YYYY-MM-DD');
};


/**
 *
 * @param date1 date
 * @param date2
 * @returns {boolean} true if date1 is same or after date2 (from day)
 */
const isSameOrAfter = (date1, date2)=> {
  if(date1 === undefined || date2 === undefined){
    return false;
  }

  try{
    return moment(date1).isSameOrAfter(date2, 'day');
  } catch(err) {
    return false;
  }
};

/**
 *
 * @param dateRange object with 'fromData', 'fromDateMax', 'toDate', 'toDateMin' properties
 * @param type 'from' or 'to'
 * @param date in 'YYYY-MM-DD' format
 * @returns {boolean} true if valid
 */
const isValidDateRange = (dateRange, type, date) => {
  if('from' === type){
    return isSameOrAfter(dateRange.toDate, date);
  }else if('to' === type){
    return isSameOrAfter(date, dateRange.fromDate);
  }
  return false;
};

/**
 * NOTE: Use {@link deviceCountManager.isValidDateRange} before using this
 *
 * param dateRange object with 'fromData', 'fromDateMax', 'toDate', 'toDateMin' properties
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
  today,
  isSameOrAfter,
  isValidDateRange,
  getUpdatedDateRangeValues
}
