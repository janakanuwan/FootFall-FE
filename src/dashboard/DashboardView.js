import React from 'react';
import { connect } from 'react-redux';

import { Redirect } from "react-router-dom";
import { ROUTE_PATH_LOGIN } from "../const/route-paths";

import MerchantView from './merchant/MerchantView';
import LocationView from './location/LocationView';
import UserView from "./userMenu/UserView";
import DayCountView from "./dayCount/DayCountView";
import GraphCountView from './graphCount/GraphCountView';

const Dashboard = ({ user, location }) => {

  if (!user) {
    return (
      <Redirect to={{
        pathname: ROUTE_PATH_LOGIN,
        state: { from: location }
      }}/>
    );
  }

  return (
    <div>
      <UserView/>
      <MerchantView/>
      <LocationView/>
      <DayCountView/>
      <GraphCountView/>
    </div>
  );
};


const mapStateToProps = (state) => {
  const auth = state.get('auth');
  return {
    user: auth.get('user')
  };
};


const DashboardView = connect(
  mapStateToProps
)(Dashboard);

export default DashboardView;

