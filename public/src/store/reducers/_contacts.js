import { actionTypes } from '../_actions.types';

const initialState = { list: [], current: {}, messages: [] };

const contactsState = (state = initialState, { type, payload }) => {
  let temp = [];
  switch (type) {
    case actionTypes.ACTION_USER_LOGED_IN:
      return { ...state, list: payload.contacts };
    case actionTypes.ACTION_UPDATE_CONTACT_LIST:
      return { ...state, list: payload };
    case actionTypes.ACTION_MESSAGES_LIST:
      return { ...state, messages: payload };
    case actionTypes.ACTION_UPDATE_CURRENT_CONTACT:
      return { ...state, current: payload };
    case actionTypes.ACTION_STORE_TEMP_MESSAGE:
      state.list.map((item) => (item._id === payload.to ? temp.unshift(item) : temp.push(item)));
      return {
        ...state,
        messages: state.messages.concat(payload),
        list: temp?.map((item) => (item._id === payload.to ? { ...item, lastMessage: payload.text } : item)),
      };
    case actionTypes.ACTION_UPDATE_MESSAGE_IF_SENDER:
      return { ...state, messages: state.messages.map((item) => (item.uuid === payload.uuid ? payload : item)) };

    case actionTypes.ACTION_UPDATE_MESSAGE_IF_RECIVER:
      return { ...state, messages: state.messages.concat(payload) };

    case actionTypes.ACTION_UPDATE_LAST_MESSAGE_IN_LIST:
      state.list.map((item) => (item._id === payload.to ? temp.unshift(item) : temp.push(item)));
      return { ...state, list: temp.map((item) => (item._id === payload.to ? { ...item, lastMessage: payload.text } : item)) };

    case actionTypes.ACTION_CLEAR_UNREAD_MESSAGES:
      return { ...state, list: state?.list?.map((item) => (item._id === payload ? { ...item, unread: 0 } : item)) };

    case actionTypes.ACTION_INCREASE_UNREAD_MESSAGES:
      return { ...state, list: state?.list?.map((item) => (item._id === payload ? { ...item, unread: item.unread + 1 } : item)) };

    case actionTypes.ACTION_USER_LOGED_OUT:
      return {};
    default:
      return state;
  }
};

export default contactsState;
