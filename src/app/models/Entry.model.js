import { Record } from './Model';

const Entry = Record({
  id: Number,
  entry: Number,
  exit: Number,
  time: Number,
  locationId: Number,
}, 'Entry');

export default Entry;
