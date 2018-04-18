const BASE_URL = 'http://localhost:3004';

const endpointLogin = () => `${BASE_URL}/login`;

/**
 * @param id {number}
 * @returns {string}
 */
const endpointMerchants = (id = 0) => {
  if (id === 0) {
    return `${BASE_URL}/merchants`;
  }
  return `${BASE_URL}/merchants/${id}`;
};

export default { BASE_URL, endpointLogin, endpointMerchants };
