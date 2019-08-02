import React from 'react';

import { storiesOf } from '@storybook/react';

import LoginView from '../src/views/LoginView';

storiesOf('LoginView')
  .add('Default Component', () => <LoginView />)