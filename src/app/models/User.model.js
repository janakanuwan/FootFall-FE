import { Record } from './Model';

const User = Record({
  id: Number,
  userEmail: String,
  userName: String,
}, 'User');

export default User;
