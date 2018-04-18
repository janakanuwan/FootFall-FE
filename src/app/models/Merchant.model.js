import { Maybe, Record } from './Model';

const Merchant = Record({
  id: Number,
  name: String,
  description: Maybe(String),
}, 'Merchant');

export default Merchant;
