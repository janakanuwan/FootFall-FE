import {connect} from 'react-redux';

import UserMenu from './ui/UserMenu';
import {logoutUser} from "./userActions";

const mapStateToProps = (state) => {
  return {
    user: state.getIn(['user', 'userInfo'])
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
