import { actionTypes } from '../_actions.types';

const initialState = { show: false, loader: false, text: '', screen: 'CHAT_LIST', sm: window.innerWidth <= 425 };

const utilsState = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ACTION_SHOW_ALERT:
      return { ...state, show: true, text: payload };
    case actionTypes.ACTION_HIDE_ALERT:
      return { ...state, show: false };
    case actionTypes.ACTION_SHOW_LOADER:
      return { ...state, loader: true };
    case actionTypes.ACTION_HIDE_LOADER:
      return { ...state, loader: false };
    case actionTypes.ACTION_UPDATE_SCREEN_VIEW:
      return { ...state, screen: payload, sm: window.innerWidth <= 425 };
    case actionTypes.ACTION_UPDATE_SCREEN_WIDTH:
      return { ...state, sm: payload <= 425 };
    default:
      return state;
  }
};

export default utilsState;
