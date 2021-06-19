import { combineReducers } from 'redux';

import userState from './_user';
import utilsState from './_utils';
import contactsState from './_contacts';

export default combineReducers({ userState, utilsState, contactsState });
