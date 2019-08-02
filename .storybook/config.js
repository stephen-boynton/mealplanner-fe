import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';
import 'storybook-chromatic';

import '../src/index.css';

// automatically import all files ending in *.stories.js
const req = requireContext('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
