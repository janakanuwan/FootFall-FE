import { Record } from './Model';

const Merchant = Record({
  id: Number,
  name: String,
}, 'Merchant');

export default Merchant;
