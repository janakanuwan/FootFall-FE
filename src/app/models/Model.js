import { fromJS, Map } from 'immutable';

export { Map, fromJS };

import { Any, List, Maybe, Record, Typed, Union } from 'typed-immutable';

export { Maybe, Any, List, Record, Typed, Union };

Typed.Enum = (types) => {
  if (typeof(types) !== 'object') {
    throw TypeError(`${types} is not a object`);
  }

  const keys = Object.keys(types);
  const TypedEnum = Typed(`Typed.Enum(${keys.join(', ')})`, value => {

    if (value && keys.includes(value)) {
      return value;
    }
    return TypeError(`${value} should be in ${keys}`);
  });

  keys.forEach(
    (key) => TypedEnum[key] = key
  );

  return TypedEnum;
};


