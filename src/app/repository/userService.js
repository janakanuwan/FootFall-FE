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

  const response = await restService.makeRequest(apiEndpoints.endpointLogin(), { method: 'POST' }, loginInfo, context);
  logger.info('fetchUser: response', JSON.stringify(response));

  if (restService.isSuccessStatus(response.status)) {
    callbackFunction(responseMapper.fetchUserSuccess(response));
  } else {
    callbackFunction(responseMapper.fetchUserFailure(response));
  }
};

/**
 *
 * @param authInfo {object} in format {token, id, email}
 * @param callbackFunction {function} e.g. (merchants) => callbackFunction(merchants)
 * @returns {Promise<void>}
 */
const fetchMerchants = async (authInfo, callbackFunction) => {
  const { token, id, email } = authInfo;
  const context = `fetchMerchants: ${email}`;

  const response = await restService.makeRequest(
    apiEndpoints.endpointMerchants(),
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

export default { fetchUser, fetchMerchants };
