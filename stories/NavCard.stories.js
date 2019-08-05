import React from 'react';
import { faAirFreshener } from '@fortawesome/free-solid-svg-icons';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import NavCard from '../src/components/NavCard';

export const navCardProps = {
  section: 'Fresh',
  path: '/home/',
  bgColor: '#d63031',
  icon: faAirFreshener
}

storiesOf('NavCard')
  .addDecorator(StoryRouter())
  .add('Default Component', () => <NavCard />)
  .add('With Props', () => <NavCard {...navCardProps} />)
