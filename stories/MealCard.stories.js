import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import MealCard from '../src/components/MealCard';

export const MealCardProps = {
  meal: {
    name: 'Ham & Swiss',
    description: 'This is one helluva sandwich made on toasted rye.',
    last_used: 'August 1, 2019'
  }
}

storiesOf('MealCard')
  .addDecorator(StoryRouter())
  .add('Default Component', () => <MealCard meal={{}} />)
  .add('With Props', () => <MealCard {...MealCardProps} />)
