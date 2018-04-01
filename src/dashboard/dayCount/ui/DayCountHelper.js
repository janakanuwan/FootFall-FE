import moment from 'moment';

/**
 *
 * @param date {Date|String}
 * @returns {string} empty, if input invalid, else formatted date
 */
const formatDate = (date) => {
  if (date) {
    return moment(date).format("dddd, MMMM Do YYYY");
  }
  return '';
};

/**
 *
 * @param date {Date|String}
 * @returns {string} empty, if time invalid, else formatted time
 */
const formatTime = (date) => {
  if (date) {
    return moment(date).format("h:mm A");
  }
  return '';
};

export {formatDate, formatTime};
