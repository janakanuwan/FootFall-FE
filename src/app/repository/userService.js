import restService from './restService';
import apiEndpoints from './const/api-end-points';

import responseMapper from './userServiceResponseMapper';
import { getNewLogger, Level } from '../logger';

const logger = getNewLogger('userService', Level.INFO, Level.INFO);

/**
 *
 * @param loginInfo {object} user credentials including {email, password}
 * @param callbackFunction {function} e.g. (user) => callbackFunction(user) where
 * 'user' can be the user or an error
 * @returns {Promise<void>}
 */
const fetchUser = async (loginInfo, callbackFunction) => {
  const context = `fetchUser: '${loginInfo.email}'`;

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
 * @param callbackFunction {function} e.g. (merchants) => callbackFunction(merchants) where
 * 'merchants' can be a list or an error
 * @returns {Promise<void>}
 */
const fetchMerchants = async (authInfo, callbackFunction) => {
  const {
    token, id, email, merchantId,
  } = authInfo;
  const context = `fetchMerchants: '${email}', merchant-${merchantId}`;

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

/**
 *
 * @param merchantAuthInfo {object} in format
 * {token, id, email, merchantId , locationId = undefined}
 * @param callbackFunction {function} e.g. (locations) => callbackFunction(locations) where
 * 'locations' can be a list or an error
 * @returns {Promise<void>}
 */
const fetchLocations = async (merchantAuthInfo, callbackFunction) => {
  const {
    token, id, email, merchantId, locationId,
  } = merchantAuthInfo;
  const context = `fetchLocations: '${email}', merchant-${merchantId}, location-${locationId}`;

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

const fetchEntries = async (merchantAuthInfo, callbackFunction) => {
  const {
    token, id, email, merchantId, locationId, customerEntryId, fromTime, toTime,
  } = merchantAuthInfo;
  const context = `fetchEntries: merchant-${merchantId}, location-${locationId}, customer-${customerEntryId}`;

  const response = await restService.makeRequest(
    apiEndpoints.entries(merchantId, locationId, fromTime, toTime, customerEntryId),
    {
      method: 'GET', authorization: token, 'user-id': id, 'user-email': email,
    }, {}, context,
  );
  logger.info('fetchEntries: response', JSON.stringify(response));

  if (restService.isSuccessStatus(response.status)) {
    callbackFunction(responseMapper.fetchEntriesSuccess(response));
  } else {
    callbackFunction(responseMapper.fetchEntriesFailure(response));
  }
};

export default {
  fetchUser, fetchMerchants, fetchLocations, fetchEntries,
};
