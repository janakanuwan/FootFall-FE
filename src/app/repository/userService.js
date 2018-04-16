import restService from './restService';
import { User } from 'Models';
import { HTTP_CODE_400_BAD_REQUEST } from './const/http-codes';
import repositoryUtil from './repositoryUtil';
import { DataFetchError } from './errors';

const BASE_URL = 'http://localhost:3004';

const restEndpointLogin = () => `${BASE_URL}/login`;

function successPayloadMapper(payload) {
  const { body: { token, settings } } = payload;
  const {
    id, name, email, lastLoginTime,
  } = settings;
  return ({
    token,
    user: User({
      id, name, email, lastLoginTime,
    }),
  });
}

function failurePayloadMapper(payload) {
  console.log(payload);

  const result = { error: true };

  const { status, statusText, body } = payload;
  if (status === HTTP_CODE_400_BAD_REQUEST && !repositoryUtil.isEmpty(body)) {
    const { code, message, description } = body;

    result.code = code;
    result.description = description;

    // mapping
    result.message = message;
  } else {
    result.message = repositoryUtil.toTitleCase(statusText);
  }

  return new DataFetchError(result);
}

/**
 *
 * @param loginInfo {object} user credentials
 * @param responseFunction {function} e.g. (response) => responseFunction(response)
 * @returns {Promise<*>}
 */
const fetchUser = async (loginInfo, responseFunction) => {
  const context = `fetchUser: ${loginInfo.email}`;

  const response = await restService.makeRequest(restEndpointLogin(), {}, loginInfo, context);

  if (restService.isSuccessStatus(response.status)) {
    return responseFunction(successPayloadMapper(response));
  }
  return responseFunction(failurePayloadMapper(response));
};

export default { fetchUser };
