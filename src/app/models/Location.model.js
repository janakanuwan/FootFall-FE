import { Record, Maybe } from './Model';

const Location = Record({
  id: Number,
  name: String,
  description: Maybe(String),
  merchantId: Number,
  parentId: Maybe(Number),
}, 'Location');

export default Location;
