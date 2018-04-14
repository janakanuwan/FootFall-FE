import fetch from 'cross-fetch';
import { getNewLogger, Level } from '../logger';
import { HTTP_CODE_520_UNKNOWN_ERROR } from './const/http-codes';

// FIXME : cache, stay alive, ...
const DEFAULT_OPTIONS = ({
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
  mode: 'cors',
});

const logger = getNewLogger('restService', Level.INFO, Level.INFO);

/**
 * @param options {object}
 * @param data {object}
 * @returns {object} updated options
 */
const getUpdatedOptions = (options, data) => {
  const updatedOptions = Object.assign(
    {},
    DEFAULT_OPTIONS, options, { body: JSON.stringify(data) },
  );
  const { method } = updatedOptions;
  if (method === 'GET' || method === 'HEAD') {
    delete updatedOptions.body;
  }
  return updatedOptions;
};

/**
 * @param endpoint
 * @param options {object} default options
 * {method: 'GET', headers: {'Content-Type': 'application/json'},
 * credentials: 'include', mode: 'cors'}
 * @param data {object} body data in JSON format (object)
 * @param context {object|string|number} to identify the responses
 *
 * @returns {Promise<{status: number, statusText: string, body: Object, context: Object|string}>}
 * response json object
 */
const makeRequest = async (endpoint, options = {}, data = {}, context) => {
  try {
    const updatedOptions = getUpdatedOptions(options, data);

    const res = await fetch(endpoint, updatedOptions);
    const { status, statusText } = res;

    const body = await res.json();
    return ({
      status, statusText, body, context,
    });
  } catch (err) {
    logger.error('makeRequest', context, err);
    return ({
      status: HTTP_CODE_520_UNKNOWN_ERROR, statusText: 'Unknown Error', body: {}, context,
    });
  }
};

/**
 *
 * @param status {number}
 * @returns {boolean} true if status is success
 */
const isSuccessStatus = status => status >= 200 && status < 300;

export default { makeRequest, isSuccessStatus };
