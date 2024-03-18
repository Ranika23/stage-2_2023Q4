import { createBodyElement } from './components/body-container';
import { createLoginForm } from './components/login-form';

import { creatButtonLogOut, creatButtonContinue } from './components/buttons';
import { creatBlockInitialData } from './components/block-initial-data';
import { creatBlockResult } from './components/block-result';

import {
  checkLoginStatus,
  closeLoginForm,
  logoutProcess,
  moveToResultBlock,
  moveFromResultBlock,
} from './event';
// eslint-disable-next-line no-unused-vars

createBodyElement();
createLoginForm();

//game-page
creatButtonLogOut();
creatBlockResult();
creatBlockInitialData(0, 0, []);
creatButtonContinue();

// event
checkLoginStatus();
closeLoginForm();
logoutProcess();
moveToResultBlock(0);
moveFromResultBlock();
