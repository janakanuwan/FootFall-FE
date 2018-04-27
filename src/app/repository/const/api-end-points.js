const BASE_URL = 'http://localhost:3004';

const login = () => `${BASE_URL}/login`;

/**
 * @param id {number} merchant id
 * @returns {string}
 */
const merchants = (id = 0) => {
  if (id === 0) {
    return `${BASE_URL}/merchants`;
  }
  return `${BASE_URL}/merchants/${id}`;
};

/**
 *
 * @param merchantId {number}
 * @param id {number} location id
 * @returns {string}
 */
const locations = (merchantId, id = 0) => {
  if (id === 0) {
    return `${BASE_URL}/merchants/${merchantId}/locations`;
  }
  return `${BASE_URL}/merchants/${merchantId}/locations/${id}`;
};

/**
 *
 * @param merchantId {number}
 * @param locationId {number}
 * @param fromTime {number}
 * @param toTime {number}
 * @param id {number} customer entry/exit detail id
 * @returns {string}
 */
const entries = (merchantId, locationId, fromTime = 0, toTime = 0, id = 0) => {
  let filterParameters = (fromTime > 0 || toTime > 0) ? '?' : '';
  filterParameters += fromTime > 0 ? `fromTime=${fromTime}` : '';
  filterParameters += toTime > 0 ? `${(filterParameters.length > 1 ? '&' : '')}toTime=${toTime}` : '';

  if (id === 0) {
    return `${BASE_URL}/merchants/${merchantId}/locations/${locationId}/entries${filterParameters}`;
  }
  return `${BASE_URL}/merchants/${merchantId}/locations/${locationId}/entries/${id}${filterParameters}`;
};

export default {
  BASE_URL, login, merchants, locations, entries,
};
