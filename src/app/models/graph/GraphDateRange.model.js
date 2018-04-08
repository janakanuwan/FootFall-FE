import { Maybe, Record } from '../Model';

const GraphDateRange = Record({
  fromDate: String,
  toDate: String,

  fromDateMax: Maybe(String),
  toDateMin: Maybe(String),

  fromDateMin: Maybe(String),
  toDateMax: Maybe(String),
}, 'GraphDateRange');

export default GraphDateRange;
