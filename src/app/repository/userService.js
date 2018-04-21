import restService from './restService';
import apiEndpoints from './const/api-end-points';

import responseMapper from './userServiceResponseMapper';
import { getNewLogger, Level } from '../logger';

const logger = getNewLogger('userService', Level.INFO, Level.INFO);


/**
 *
 * @param loginInfo {object} user credentials
 * @param callbackFunction {function} e.g. (user) => callbackFunction(user)
 * @returns {Promise<void>}
 */
const fetchUser = async (loginInfo, callbackFunction) => {
  const context = `fetchUser: ${loginInfo.email}`;

  const response = await restService.makeRequest(apiEndpoints.login(), { method: 'POST' }, loginInfo, context);
  logger.info('fetchUser: response', JSON.stringify(response));

  if (restService.isSuccessStatus(response.status)) {
    callbackFunction(responseMapper.fetchUserSuccess(response));
  } else {
    callbackFunction(responseMapper.fetchUserFailure(response));
  }
};

/**
 *
 * @param authInfo {object} in format {token, id, email, merchantId = undefined}
 * @param callbackFunction {function} e.g. (merchants) => callbackFunction(merchants)
 * @returns {Promise<void>}
 */
const fetchMerchants = async (authInfo, callbackFunction) => {
  const {
    token, id, email, merchantId,
  } = authInfo;
  const context = `fetchMerchants: ${email}`;

  const response = await restService.makeRequest(
    apiEndpoints.merchants(merchantId),
    {
      method: 'GET', authorization: token, 'user-id': id, 'user-email': email,
    }, {}, context,
  );
  logger.info('fetchMerchants: response', JSON.stringify(response));

  if (restService.isSuccessStatus(response.status)) {
    callbackFunction(responseMapper.fetchMerchantsSuccess(response));
  } else {
    callbackFunction(responseMapper.fetchMerchantsFailure(response));
  }
};

const fetchLocations = async (authInfo, callbackFunction) => {
  const {
    token, id, email, merchantId, locationId,
  } = authInfo;
  const context = `fetchLocations: ${email}`;

  const response = await restService.makeRequest(
    apiEndpoints.locations(merchantId, locationId),
    {
      method: 'GET', authorization: token, 'user-id': id, 'user-email': email,
    }, {}, context,
  );
  logger.info('fetchLocations: response', JSON.stringify(response));

  if (restService.isSuccessStatus(response.status)) {
    callbackFunction(responseMapper.fetchLocationsSuccess(response));
  } else {
    callbackFunction(responseMapper.fetchLocationsFailure(response));
  }
};

export default { fetchUser, fetchMerchants, fetchLocations };
