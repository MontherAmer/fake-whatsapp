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

const alertInitialState = { show: false, text: '' };

const alertState = (state = alertInitialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SHOW_ALERT:
      return { ...state, show: true, text: payload };
    case actionTypes.HIDE_ALERT:
      return { ...state, show: false, text: '' };
    default:
      return state;
  }
};

export default combineReducers({ userState, alertState });
