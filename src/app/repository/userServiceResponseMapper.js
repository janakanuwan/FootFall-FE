import { List, Location, Merchant, User } from 'Models';
import { HTTP_CODE_400_BAD_REQUEST } from './const/http-codes';
import repositoryUtil from './repositoryUtil';
import { DataFetchError } from './errors';
import { normalize, schema } from 'normalizr';

const isNonEmptyBadResponse = (status, body) =>
  status === HTTP_CODE_400_BAD_REQUEST && !repositoryUtil.isEmpty(body);

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
  const { status, statusText, body } = response;

  const result = { error: true };

  if (isNonEmptyBadResponse(status, body)) {
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
  const { body } = response;

  const merchants = [];
  body.forEach(merchant =>
    merchants.push(Merchant(merchant)));

  return List(Merchant)(merchants);
};


const fetchMerchantsFailure = (response) => {
  // FIXME
  const { status, statusText, body } = response;

  const result = { error: true };

  if (isNonEmptyBadResponse(status, body)) {
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

const locationSchema = new schema.Entity('locations');
locationSchema.define({ subLocations: [locationSchema] });
const locationListSchema = [locationSchema];

const fetchLocationsSuccess = (response) => {
  const { body } = response;

  const { entities: { locations: locationDetails } } = normalize(body, locationListSchema);
  Object.values(locationDetails).forEach((location) => {
    Object.values(location.subLocations).forEach((subLocationId) => {
      locationDetails[subLocationId].parentId = location.id;
    });
  });

  const locations = [];
  Object.values(locationDetails).forEach(location => locations.push(Location(location)));

  return List(Location)(locations);
};

const fetchLocationsFailure = (response) => {
  // FIXME
  const { status, statusText, body } = response;

  const result = { error: true };

  if (isNonEmptyBadResponse(status, body)) {
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
  fetchUserSuccess,
  fetchUserFailure,
  fetchMerchantsSuccess,
  fetchMerchantsFailure,
  fetchLocationsSuccess,
  fetchLocationsFailure,
};
