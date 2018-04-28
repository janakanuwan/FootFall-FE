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
 * @returns {number} today in millis (millis)
 */
const now = () => moment().valueOf();

/**
 *
 * @return {number} today 00:00h in millis (unix timestamp)
 */
const today0000h = () => moment().startOf('day').valueOf();

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
 * @param date {Date|String|Number} encourage to use string and number
 * @returns {string} empty, if input invalid, else formatted date
 */
const formatDate = (date) => {
  if (date) {
    return moment(date).format('dddd, MMMM Do YYYY');
  }
  return '';
};

/**
 *
 * @param date {Date|String|Number} encourage to use string and number
 * @returns {string} empty, if time invalid, else formatted time
 */
const formatTime = (date) => {
  if (date) {
    return moment(date).format('h:mm A');
  }
  return '';
};


export default {
  today,
  todayWithTime,
  now,
  today0000h,
  oneMonthBefore,
  isSameOrAfter,
  formatDate,
  formatTime,
};
