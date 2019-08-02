import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import NavBar from '../src/components/NavBar';
import NavButton from '../src/components/NavButton';
import SiteTitle from '../src/components/SiteTitle';

storiesOf('NavBar')
  .add('Default Component', () => <NavBar></NavBar>)
  .add('With NavButtons', () => <NavBar>
    <SiteTitle />
    <div>
      <NavButton>Home</NavButton>
      <NavButton>About</NavButton>
      <NavButton>Skills</NavButton>
    </div>

  </NavBar>)
  .add('With Selected NavButton', () => <NavBar>
    <SiteTitle />
    <div>
      <NavButton selected >Home</NavButton>
      <NavButton>About</NavButton>
      <NavButton>Skills</NavButton>
    </div>

  </NavBar>)