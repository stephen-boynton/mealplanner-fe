import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import HomeView from '../src/views/HomeView';

storiesOf('HomeView')
  .addDecorator(StoryRouter())
  .add('Default Component', () => <HomeView />)