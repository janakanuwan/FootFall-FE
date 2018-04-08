import React from 'react';
import {connect} from 'react-redux';

import MerchantView from './merchant/MerchantView';
import LocationView from './location/LocationView';
import UserView from "./userMenu/UserView";
import DayCountView from "./dayCount/DayCountView";
import GraphCountView from './graphCount/GraphCountView';

const Dashboard = ({user}) => {

  console.log(user);
  // if (!user) {
  //   return <Redirect to={ROUTE_PATH_LOGIN}/>
  // }

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
  console.log(state);
  return {
    user: state.getIn(['auth', 'user'])
  };
};


const DashboardView = connect(
  mapStateToProps
)(Dashboard);

export default DashboardView;

