import moment from 'moment';

/**
 *
 * @returns {string} today in "YYYY-MM-DD" format
 */
const today = () => moment().format('YYYY-MM-DD');

/**
 *
 * @returns {string} today in ISO 8601 format (e.g. "2018-04-05T07:09:23+05:30")
 */
const todayWithTime = () => moment().format();

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


export default {
  today,
  todayWithTime,
  isSameOrAfter,
};
