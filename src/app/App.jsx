import React from 'react';

import MerchantView from '../dashboard/merchant/MerchantView';
import LocationView from '../dashboard/location/LocationView';
import UserView from "../dashboard/user/UserView";
import DayCountView from "../dashboard/dayCount/DayCountView";

const App = () => {
  return (
    <div>
      <UserView/>
      <MerchantView/>
      <LocationView/>
      <DayCountView/>
    </div>
  );
};

export default App;

