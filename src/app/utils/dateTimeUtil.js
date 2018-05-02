import moment from 'moment';

/**
 * TODO: change with date-fns or date
 */

/**
 *
 * @returns {number} today in millis (unix timestamp)
 */
const now = () => moment().valueOf();

/**
 *
 * @param date {string|number} e.g. '2018-04-28'
 * @return {number} start of given 'date' in millis
 */
const millisStartOfDay = date => moment(date).startOf('day').valueOf();

/**
 *
 * @param date {string|number} e.g. '2018-04-28'
 * @return {number} end of given 'date' in millis
 */
const millisEndOfDay = date => moment(date).endOf('day').valueOf();

/** *
 *
 * @return {number} one month before now in millis (unix timestamp)
 */
const oneMonthBefore = () => moment().subtract(1, 'month').valueOf();

/**
 *
 * @param date1 date
 * @param date2
 * @returns {boolean} true if date1 is same or after date2 (from day)
 */
const isSameOrAfter = (date1, date2) => {
  if (date1 === undefined || date2 === undefined) {
    return false;
  }

  try {
    return moment(date1).isSameOrAfter(date2, 'day');
  } catch (err) {
    return false;
  }
};

/**
 *
 * @param date {String|Number} encourage to use string and number
 * @param format {string} date format (default: 'YYYY-MM-DDTHH:mm:ss')
 * @returns {string} empty, if input invalid, else formatted date
 */
const formatDateTime = (date, format = 'YYYY-MM-DDTHH:mm:ss') => {
  if (date) {
    return moment(date).format(format);
  }
  return '';
};


/**
 *
 * @param fromTime millis (unix timestamp)
 * @param toTime {number} millis (unix timestamp)
 * @param binType {string} one of ['hourly'|'day'|'week'|'month']
 * @return {[number]} including 'fromTime', intermediate values incremented
 * by 'binType' until and 'toTime'
 */
const timeBinRange = (fromTime, toTime, binType = 'hourly') => {
  let incrementMillis;
  switch (binType) {
    case 'hourly':
      incrementMillis = 36e5;
      break;
    case 'day':
      incrementMillis = 864e5;
      break;
    case 'week':
      incrementMillis = 6048e5;
      break;
    case 'month':
      incrementMillis = 0;
      break;
    default:
      incrementMillis = 36e5;
  }

  const binRange = [fromTime];

  let start;
  if (incrementMillis > 0) {
    start = fromTime + incrementMillis;
    while (start < toTime) {
      binRange.push(start);
      start += incrementMillis;
    }
  } else {
    start = moment(fromTime).add(1, 'month').valueOf();
    while (start < toTime) {
      binRange.push(start);
      start = moment(start).add(1, 'month').valueOf();
    }
  }

  binRange.push(toTime);

  return binRange;
};

export default {
  now,
  millisStartOfDay,
  millisEndOfDay,
  oneMonthBefore,
  isSameOrAfter,
  formatDateTime,
  timeBinRange,
};
