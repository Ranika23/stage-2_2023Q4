import { createBodyElement } from './components/body-container';
import { createLoginForm } from './components/login-form';

import {
  creatButtonLogOut,
  creatButtonContinue,
  creatButtonCheck,
  creatButtonAutoComplete,
} from './components/buttons';
import { creatBlockInitialData } from './components/block-initial-data';
import { creatBlockResult } from './components/block-result';

import {
  checkLoginStatus,
  closeLoginForm,
  logoutProcess,
  moveToResultBlock,
  moveFromResultBlock,
} from './event';

import { clickAutoComplete } from './button-actions/auto-complete';
import { drapPuzzleInResult, drapPuzzleFromResult } from './drag-n-drop';
// eslint-disable-next-line no-unused-vars

createBodyElement();
createLoginForm();

//game-page
creatButtonLogOut();
creatBlockResult();
creatBlockInitialData(0, 0, []);
creatButtonContinue();
creatButtonCheck();
creatButtonAutoComplete();

// event
checkLoginStatus();
closeLoginForm();
logoutProcess();
moveToResultBlock(0);
moveFromResultBlock();
clickAutoComplete();
drapPuzzleInResult();
drapPuzzleFromResult();
