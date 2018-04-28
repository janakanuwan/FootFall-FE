import startCase from 'lodash/startCase';
import isString from 'lodash/isString';

const isEmpty = object => object && Object.keys(object).length === 0;

const toTitleCase = (text) => {
  if (isString(text)) {
    return startCase(text.toLowerCase());
  }
  return '';
};

export default { isEmpty, toTitleCase };

