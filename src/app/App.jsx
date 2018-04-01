import React from 'react';

import MerchantView from '../dashboard/merchant/MerchantView';
import LocationView from '../dashboard/location/LocationView';
import UserView from "../dashboard/user/UserView";

const App = () => {
  return (
    <div>
      <UserView/>
      <MerchantView/>
      <LocationView/>
    </div>
  );
};

export default App;

