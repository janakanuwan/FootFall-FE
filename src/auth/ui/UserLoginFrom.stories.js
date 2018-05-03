import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import UserLoginForm from './UserLoginForm';

storiesOf('UserLoginForm', module)
  .add('User Login - empty', () => (<UserLoginForm onSubmit={action('Login clicked')} />))
  .add('User Login - with data', () => {
    const data = {
      email: 'hello@test.com',
      password: '1234',
      rememberMe: true,
      onSubmit: action('click-login')
    };
    return (<UserLoginForm {...data} />)
  })
  .add('User Login - with error', () => {
    const data = {
      email: 'hello',
      password: '1234',
      rememberMe: true,
      emailError: true,
      passwordError: true,
      onSubmit: action('click-login')
    };
    return (<UserLoginForm {...data} />);
  })
;
