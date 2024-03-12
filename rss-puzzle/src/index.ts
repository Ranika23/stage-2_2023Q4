import { createBodyElement } from './components/body-container';
import { createLoginForm } from './components/login-form';
import { createStartPage } from './components/start-page';

import { creatButtonLogOut } from './components/buttons';

import { checkLoginStatus, closeLoginForm, logoutProcess } from './event';
// eslint-disable-next-line no-unused-vars

createBodyElement();
createLoginForm();
createStartPage();

//game-page
creatButtonLogOut();

// event
checkLoginStatus();
closeLoginForm();
logoutProcess();
