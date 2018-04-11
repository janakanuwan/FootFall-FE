import fetch from 'cross-fetch';
import { getNewLogger, Level } from '../logger';

// FIXME : cache, stay alive, ...
const DEFAULT_OPTIONS = ({
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
  mode: 'cors',
});

const DEFAULT_ERROR_STATUS = 520;
const DEFAULT_ERROR_STATUS_TEXT = 'Unexpected Error';

const logger = getNewLogger('restService', Level.INFO, Level.INFO);

/**
 * @param options {object}
 * @param data {object}
 * @returns {object} updated options
 */
const getUpdatedOptions = (options, data) => {
  const updatedOptions = Object.assign({}, DEFAULT_OPTIONS, options, { body: JSON.stringify(data) });
  const {method} = updatedOptions;
  if(method === 'GET' || method === 'HEAD' ){
    delete updatedOptions.body;
  }
  return updatedOptions;
};

/**
 * Higher-Order function to execute the given function with payload
 * NOTE: validation should be done before hand
 *
 * @param func {function}  function(payload) to execute
 * @param payload {object} payload to add
 *
 * @returns {*}
 */
const execute = (func, payload = {}) => {
  return func(payload);
};

/**
 *
 * @param types {object} function types {request: function(payload), success: function(payload)
 * , failure: function(payload)} [NOTE: payload : {status, statusText, body, context}, and validate using {@link isSupportedType} ]
 * @param endpoint
 * @param options {object }default options {method: 'GET', headers: {'Content-Type': 'application/json'}, credentials: 'include', mode: 'cors'}
 * @param data {object} body data in JSON format (object)
 * @param context {object|string|number} to identify the responses
 *
 * @returns {Promise<void>}
 */
const makeRequest = async (types, endpoint, options = {}, data = {}, context) => {
  const {request, success, failure} = types;

  try{
    execute(request, { context });

    const updatedOptions = getUpdatedOptions(options, data);

    const res = await fetch(endpoint, updatedOptions);
    const { status, statusText } = res;

    const body = await res.json();
    const payload = { status, statusText, body, context };

    if (status >= 200 && status < 300) {
      return execute(success, payload);
    }
    return execute(failure, payload);

  }catch (err){
    logger.error('makeRequest', context, err);
    return execute(failure, { status: DEFAULT_ERROR_STATUS, statusText: DEFAULT_ERROR_STATUS_TEXT, context });
  }
};


export default { makeRequest };
