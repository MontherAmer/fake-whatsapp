import { combineReducers } from 'redux';
import { actionTypes } from './_actions.types';

const userInitialState = { _id: '', email: '', name: '', token: '' };

const userState = (state = userInitialState, { type, payload }) => {
  switch (type) {
    case actionTypes.USER_LOGED_IN:
      let { _id, email, name, token } = payload;
      return { ...state, _id, email, name, token };
    case actionTypes.UPDATE_PROFILE:
      return { ...state, ...payload };
    case actionTypes.USER_LOGED_OUT:
      return {};
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

const contactsInitialState = { list: [], current: {}, messages: [] };

const contactsState = (state = contactsInitialState, { type, payload }) => {
  switch (type) {
    case actionTypes.USER_LOGED_IN:
      return { ...state, list: payload.contacts };
    case actionTypes.UPDATE_CONTACT_LIST:
      return { ...state, list: payload };
    case actionTypes.MESSAGES_LIST:
      return { ...state, messages: payload };
    case actionTypes.UPDATE_CURRENT_CONTACT:
      return { ...state, current: payload };
    case actionTypes.NEW_MESSAGE_RECIVED:
      return { ...state, messages: state.messages.concat(payload) };
    default:
      return state;
  }
};

const screenInitialState = { screen: 'CHAT_LIST', sm: window.innerWidth <= 425 };

const screenState = (state = screenInitialState, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case actionTypes.UPDATE_SCREEN_VIEW:
      return { ...state, screen: payload, sm: window.innerWidth <= 425 };
    case actionTypes.UPDATE_SCREEN_WIDTH:
      return { ...state, sm: payload <= 425 };
    default:
      return state;
  }
};

export default combineReducers({ userState, utilsState, contactsState, screenState });
