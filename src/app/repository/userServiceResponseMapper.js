import { List, User } from 'Models';
import { HTTP_CODE_400_BAD_REQUEST } from './const/http-codes';
import repositoryUtil from './repositoryUtil';
import { DataFetchError } from './errors';
import Merchant from '../models/Merchant.model';

const fetchUserSuccess = (response) => {
  const { body: { token, settings } } = response;
  const {
    id, name, email, lastLoginTime,
  } = settings;
  return ({
    token,
    user: User({
      id, name, email, lastLoginTime,
    }),
  });
};

const fetchUserFailure = (response) => {
  // FIXME
  const result = { error: true };

  const { status, statusText, body } = response;
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
};

const fetchMerchantsSuccess = (response) => {
  const merchants = [];
  response.body.forEach(({ id, name, description }) =>
    merchants.push(Merchant({ id, name, description })));

  return List(Merchant)(merchants);
};

const fetchMerchantsFailure = (response) => {
  // FIXME
  const result = { error: true };

  const { status, statusText, body } = response;
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
};


export default {
  fetchUserSuccess, fetchUserFailure, fetchMerchantsSuccess, fetchMerchantsFailure,
};
