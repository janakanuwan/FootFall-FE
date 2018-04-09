import fetch from 'cross-fetch';

import { getNewLogger, Level } from '../logger';

const logger = getNewLogger('restService', Level.INFO, Level.INFO);

const BASE_URL = '';

const defaultOptions = data => ({
  method: 'GET',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
  mode: 'cors',
});

/**
 * @param options
 * @param data
 * @returns {{}} updated options
 */
const getUpdatedOptions = (options, data) => {
  const updatedOptions = Object.assign({}, defaultOptions(data), options);
  const {method} = updatedOptions;
  if(method === 'GET' || method === 'HEAD' ){
    delete updatedOptions.body;
  }
  return updatedOptions;
};

/**
 * Higher-Order function to execute the given function with payload and error data
 *
 * @param func function(payload, error) to execute
 * @param payload payload to add
 * @param error true if error
 */
const execute = (func, payload = {}, error = false) => {
  if(func && typeof func === 'function' ){
    return func(payload, error);
  }
};

/**
 *
 * @param types function types {request: function(payload, error), success: function(payload, error)
 * , failure: function(payload, error)}
 * @param endpoint
 * @param options default options {method: 'GET', headers: {'Content-Type': 'application/json'}, credentials: 'include', mode: 'cors'}
 * @param data body data in JSON format
 * @returns {Promise<void>}
 */
const makeRequest = async (types, endpoint, options = {}, data = {}) => {
  const {request, success, failure} = types;
  try{
    execute(request);

    const updatedOptions = getUpdatedOptions(options, data);

    const res = await fetch(`${BASE_URL}${endpoint}`, updatedOptions);

    if (res.status >= 400) {
      return execute(failure, {status: res.status, message: res.statusText}, true);
    }

    const resultData = await res.json();
    return execute(success, resultData);

  }catch (err){
    logger.error('makeRequest', err);
    return execute(failure, {message: 'Unexpected Error'}, true);
  }

};


export default {makeRequest};
