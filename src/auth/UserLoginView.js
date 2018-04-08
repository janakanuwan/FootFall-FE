import {connect} from 'react-redux';
import React from 'react';

import UserLoginForm from './ui/UserLoginForm';
import {loginUser} from "./authActions";

import {ROUTE_PATH_DEFAULT} from "../const/route-paths";
import {Redirect} from "react-router-dom";

const UserLogin = (props) => {
  const {user, onSubmit, location} = props;

  if(user){
    const { from } = location.state || { from: { pathname: ROUTE_PATH_DEFAULT } };
    return (<Redirect to={from}/>);
  }

  return (<UserLoginForm onSubmit={onSubmit}/>);
};

const mapStateToProps = (state) => {
  const auth = state.get('auth');
  return {
    user: auth.get('user')
  };
};

const mapStateToDispatch = (dispatch) => {
  return {
    onSubmit: (loginInfo) => dispatch(loginUser(loginInfo))
  };
};

const UserLoginView = connect(
  mapStateToProps,
  mapStateToDispatch
)(UserLogin);

export default UserLoginView;
