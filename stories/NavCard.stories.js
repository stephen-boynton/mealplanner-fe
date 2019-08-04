import React from 'react';

import { storiesOf } from '@storybook/react';

import NavCard from '../src/components/NavCard';

storiesOf('NavCard')
  .add('Default Component', () => <NavCard />)
  .add('With Props', () => <NavCard section="Meals" image="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg" />)
