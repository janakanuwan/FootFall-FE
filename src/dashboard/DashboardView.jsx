import React from 'react';

import MerchantView from './merchant/MerchantView';
import LocationView from './location/LocationView';
import UserView from "./user/UserView";
import DayCountView from "./dayCount/DayCountView";
import GraphCountView from './graphCount/GraphCountView';

/**
 * NOTE: Need to provide the store for connect
 *
 * @returns the DashBoard view
 * @constructor
 */
const DashboardView = () => (
  <div>
    <UserView/>
    <MerchantView/>
    <LocationView/>
    <DayCountView/>
    <GraphCountView/>
  </div>
);

export default DashboardView;

