import restService from './restService';
import { User } from "Models";
import { HTTP_CODE_400_BAD_REQUEST } from "./const/http-codes";
import repositoryUtil from './repositoryUtil';
import { DataFetchError } from "./errors";

const BASE_URL = 'http://localhost:3004';

const restEndpointLogin = () => `${BASE_URL}/login_fail`;

function successPayloadMapper(payload) {
  const { body: { token, settings } } = payload;
  const { id, name, email, lastLoginTime } = settings;
  return ({ token, user: User({ id, name, email, lastLoginTime }) });
}

function failurePayloadMapper(payload) {
  console.log(payload);

  const result = { error: true };

  const { status, statusText, body } = payload;
  if (status === HTTP_CODE_400_BAD_REQUEST && !repositoryUtil.isEmpty(body)) {
    const { code, message, description } = body;

    // mapping
    result.message = message;


  } else {
    result.message = repositoryUtil.toTitleCase(statusText);
  }


  return result;
}

/**
 * Higher-Order function to execute the given function with payload
 * NOTE: validation should be done beforehand
 *
 * @param func {function}  function(payload) to execute
 * @param payload {object} payload to add
 *
 * @returns {*}
 */
const execute = (func, payload = {}) => {
  return func && func(payload);
};

const getUser = async (types, loginInfo) => {
  const context = `getUser: ${loginInfo['email']}`;
  execute(types['request'], { context });

  const response = await restService.makeRequest(restEndpointLogin(), {}, loginInfo, context);

  if (restService.isSuccessStatus(response.status)) {
    execute(types['success'], successPayloadMapper(response));
  } else {
    execute(types['failure'], new DataFetchError(failurePayloadMapper(response)));
  }
};

export default { getUser };
