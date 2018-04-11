import restService from './restService';
import User from "Models";

const BASE_URL = 'http://localhost:3000';

const restEndpointLogin = () => `${BASE_URL}/login`;



function successPayloadMapper(payload) {
  // const {token, settings} = payload;
  // const {id, name, email, lastLoginTime} = settings;
  // const user = User({id, });

  return Object.assign({}, payload, { mapping: true });
}

function failurePayloadMapper(payload) {
  return Object.assign({}, payload, { mapping: true });
}

const getUserPayloadMapper = (types) => ({
  request: payload => types['request'] && types['request'](payload),
  success: payload => types['success'] && types['success'](successPayloadMapper(payload)),
  failure: payload => types['failure'] && types['failure'](failurePayloadMapper(payload)),
});

const getUser = (types, loginInfo) => {
  restService.makeRequest(getUserPayloadMapper(types), restEndpointLogin(), {}, loginInfo, `getUser: ${loginInfo['email']}`);
};

export default { getUser };
