import { createBodyElement } from './components/body-container';
import { createLoginForm } from './components/login-form';

import { closeLoginForm } from './event';
// eslint-disable-next-line no-unused-vars
createBodyElement();
createLoginForm();

// event
closeLoginForm();
