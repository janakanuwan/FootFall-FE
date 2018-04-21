const BASE_URL = 'http://localhost:3004';

const login = () => `${BASE_URL}/login`;

/**
 * @param id {number}
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
 * @param id {number}
 * @returns {string}
 */
const locations = (merchantId, id = 0) => {
  if (id === 0) {
    return `${BASE_URL}/merchants/${merchantId}/locations`;
  }
  return `${BASE_URL}/merchants/${merchantId}/locations/${id}`;
};

export default {
  BASE_URL, login, merchants, locations,
};
