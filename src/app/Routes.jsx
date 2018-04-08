import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {ROUTE_PATH_DASHBOARD, ROUTE_PATH_DEFAULT, ROUTE_PATH_LOGIN} from "../const/route-paths";

import DashboardView from "../dashboard/DashboardView";
import UserLoginForm from '../auth/ui/UserLoginForm';

const Routes = () => (
  <Router>
    <div>
      <Route exact path={ROUTE_PATH_DEFAULT} component={DashboardView}/>
      <Route path={ROUTE_PATH_DASHBOARD} component={DashboardView}/>
      <Route path={ROUTE_PATH_LOGIN} component={UserLoginForm}/>
    </div>
  </Router>
);


export default Routes;
