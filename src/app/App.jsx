import React from 'react';

import MerchantView from '../dashboard/merchant/MerchantView';
import LocationView from '../dashboard/location/LocationView';
import UserView from "../dashboard/user/UserView";
import DayCountView from "../dashboard/dayCount/DayCountView";
import GraphCountView from '../dashboard/graphCount/GraphCountView';

const App = () => {
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

export default App;

