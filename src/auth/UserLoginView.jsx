import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';

import UserLoginForm from './ui/UserLoginForm';
import { fetchUser } from './authActions';

import { ROUTE_PATH_DEFAULT } from '../const/route-paths';
import { Redirect } from 'react-router-dom';

const UserLogin = (props) => {
  const { user, onSubmit, location } = props;

  if (user) {
    const { from } = location.state || { from: { pathname: ROUTE_PATH_DEFAULT } };
    return (<Redirect to={from} />);
  }

  return (<UserLoginForm onSubmit={onSubmit} />);
};

UserLogin.propTypes = {
  user: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  onSubmit: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

UserLogin.defaultProps = {
  user: null,
};

const mapStateToProps = (state) => {
  const auth = state.get('auth');
  return {
    user: auth.get('user'),
  };
};

const mapStateToDispatch = dispatch => ({
  onSubmit: loginInfo => dispatch(fetchUser(loginInfo)),
});

const UserLoginView = connect(
  mapStateToProps,
  mapStateToDispatch,
)(UserLogin);

export default UserLoginView;
