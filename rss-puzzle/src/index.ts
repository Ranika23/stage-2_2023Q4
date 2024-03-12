import { createBodyElement } from './components/body-container';
import { createLoginForm } from './components/login-form';

import { creatButtonLogOut } from './components/buttons';

import { checkLoginStatus, closeLoginForm, logoutProcess } from './event';
// eslint-disable-next-line no-unused-vars

createBodyElement();
createLoginForm();

//game-page
creatButtonLogOut();

// event
checkLoginStatus();
closeLoginForm();
logoutProcess();
