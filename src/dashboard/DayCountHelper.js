import moment from 'moment';

/**
 *
 * @param date {Date}
 * @returns {string} empty, if input invalid, else formatted date
 */
const formatDate = (date) => {
  if (date && date instanceof Date) {
    return moment(date).format("dddd, MMMM Do YYYY");
  }
  return '';
};

/**
 *
 * @param date {Date}
 * @returns {string} empty, if time invalid, else formatted time
 */
const formatTime = (date) => {
  if (date && date instanceof Date) {
    return moment(date).format("h:mm:ss a");
  }
  return '';
};

export {formatDate, formatTime};
