import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import UserMenu from './UserMenu';

storiesOf('UserMenu', module)
  .add('With all data', () => {
    const data = {
      user: { name: 'Hello Test', email: 'hellotest@gmail.com' },
      onLogout: user => action(`Logging out: ${user}`),
    };
    return (<UserMenu {...data} />);
  })
;
