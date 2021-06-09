import { combineReducers } from 'redux';
import { actionTypes } from './_actions.types';

const userInitialState = { _id: '', email: '', name: '', token: '' };

const userState = (state = userInitialState, { type, payload }) => {
  switch (type) {
    case actionTypes.USER_LOGED_IN:
      return { ...state, ...payload };
    case actionTypes.USER_LOGED_OUT:
      return { _id: '', email: '', name: '', token: '' };
    default:
      return state;
  }
};

const utilsInitialState = { show: false, loader: false, text: '' };

const utilsState = (state = utilsInitialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SHOW_ALERT:
      return { ...state, show: true, text: payload };
    case actionTypes.HIDE_ALERT:
      return { ...state, show: false, text: '' };
    case actionTypes.SHOW_LOADER:
      return { ...state, loader: true };
    case actionTypes.HIDE_LOADER:
      return { ...state, loader: false };
    default:
      return state;
  }
};

export default combineReducers({ userState, utilsState });
