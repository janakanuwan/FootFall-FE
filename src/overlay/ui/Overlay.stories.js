import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Overlay from './Overlay';

storiesOf('Overlay', module)
  .add('Loading overlay -close', () => {
    const data = {
      title: 'Loading...',
      message: 'Verifying login ...',
      open: false,
      onClose: action('click-overlay:outside'),
    };
    return (<Overlay {...data} />);
  })
  .add('Loading overlay - open', () => {
    const data = {
      title: 'Loading...',
      message: 'Verifying login ...',
      open: true,
      onClose: action('click-overlay:outside'),
    };
    return (<Overlay {...data} />);
  })
;
