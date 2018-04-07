import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import DashboardView from "./dashboard/DashboardView";
import UserLoginForm from './auth/ui/UserLoginForm';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={DashboardView}/>
      <Route path="/dashboard" component={DashboardView}/>
      <Route path="/login" component={UserLoginForm}/>
    </div>
  </Router>
);

export default Routes;
