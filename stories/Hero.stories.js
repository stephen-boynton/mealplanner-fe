import React from 'react';

import { storiesOf } from '@storybook/react';

import Hero from '../src/components/Hero';

storiesOf('Hero')
  .add('Default Component', () => <Hero />)