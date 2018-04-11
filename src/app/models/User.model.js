import { Record } from './Model';

const User = Record({
  id: Number,
  email: String,
  name: String,
  lastLoginTime: Number(0),
}, 'User');

export default User;
