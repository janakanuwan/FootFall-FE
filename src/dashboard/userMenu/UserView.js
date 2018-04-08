import {connect} from 'react-redux';

import UserMenu from './ui/UserMenu';
import {logoutUser} from "../../auth/authActions";

const mapStateToProps = (state) => {
  const auth = state.get('auth');
  return {
    user: auth.get('user')
  };
};

const matchDispatchToProps = (dispatch) => {
  return {
    onLogout: (user) => dispatch(logoutUser(user))
  };
};

const UserView = connect(
  mapStateToProps,
  matchDispatchToProps
)(UserMenu);

export default UserView;
