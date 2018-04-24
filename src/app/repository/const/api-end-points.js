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
 * @param id {number} customer entry/exit detail id
 * @returns {string}
 */
const entries = (merchantId, locationId, id = 0) => {
  if (id === 0) {
    return `${BASE_URL}/merchants/${merchantId}/locations/${locationId}/entries`;
  }
  return `${BASE_URL}/merchants/${merchantId}/locations/${locationId}/entries/${id}`;
};

export default {
  BASE_URL, login, merchants, locations, entries,
};
