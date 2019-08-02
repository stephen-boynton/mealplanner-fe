import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import NavButton from '../src/components/NavButton';

storiesOf('NavButton')
  .add('Default Component', () => <NavButton />)
  .add('With Name', () => <NavButton>My Nav</NavButton>)
  .add('Selected', () => <NavButton selected >My Selected Nav</NavButton>)