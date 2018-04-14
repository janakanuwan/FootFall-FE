import _ from 'lodash';


const isEmpty = object => object && Object.keys(object).length === 0;

const toTitleCase = (text) => {
  if (_.isString(text)) {
    return _.startCase(text.toLowerCase());
  }
  return '';
};

export default { isEmpty, toTitleCase };

