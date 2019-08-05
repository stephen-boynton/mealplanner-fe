import React from 'react';

import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import MealView from '../src/views/MealView';

export const mockMeals = [
  {
    name: 'Sweet Turkey Relish',
    description: 'End your day with this sweet tasting treat!',
    last_used: 'Sept 1, 2019',
    isFav: false
  },
  {
    name: 'Corn Chips',
    description: 'They are corn, they are chips!',
    last_used: 'Sept 1, 2019',
    isFav: false
  },
  {
    name: 'Waffle Whopper',
    description: 'Like the burger, but with the waffle',
    last_used: 'Sept 1, 2019',
    isFav: false
  },
  {
    name: 'Tangy BBQ Chicken',
    description: 'BBQ, tang, and chicken, what else???',
    last_used: 'Sept 1, 2019',
    isFav: false
  }
];

storiesOf('MealView')
  .addDecorator(StoryRouter())
  .add('Default Component', () => <MealView recentMeals={[]} />)
  .add('With Mock Meals', () => <MealView recentMeals={mockMeals} />)