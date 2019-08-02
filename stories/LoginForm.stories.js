import React from 'react';

import { storiesOf } from '@storybook/react';

import LoginForm from '../src/components/LoginForm';

storiesOf('LoginForm')
  .add('Default Component', () => <LoginForm />)