import moment from 'moment';

const DATE_FORMAT = "YYYY-MM-DD";

/**
 *
 * @param date {Date}
 * @returns {string|undefined} formatted date in {#DATE_FORMAT}
 */
const formatDate = (date) => {
  if (date && date instanceof Date) {
    return moment(date).format(DATE_FORMAT);
  }
  return undefined;
};

/**
 *
 * @returns {string} today in {DATE_FORMAT}
 */
const today = () => {
  return moment().format(DATE_FORMAT);
};

/**
 *
 * @returns {string} date one month before in {DATE_FORMAT}
 */
const oneMonthBefore = () => {
  return moment().subtract(1, 'months').format(DATE_FORMAT);
};


export {formatDate, today, oneMonthBefore};
