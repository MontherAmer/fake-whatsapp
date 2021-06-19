import { actionTypes } from '../_actions.types';
import { apis } from '../_apis';
import store from '../index';

const dispatchEvent = (e) => store().store.dispatch(e);

export const addFriend = (data) => (dispatch) => {
  dispatch({ type: actionTypes.ACTION_SHOW_LOADER });
  return apis.friend(data).then((res) => {
    return res.success
      ? (dispatch({
          type: actionTypes.ACTION_UPDATE_CONTACT_LIST,
          payload: res.data,
        }),
        dispatch({ type: actionTypes.ACTION_HIDE_LOADER, success: true }))
      : (dispatchEvent({ type: actionTypes.ACTION_SHOW_ALERT, payload: 'This email does not have accound' }),
        dispatch({ type: actionTypes.ACTION_HIDE_LOADER }));
  });
};

export const createGroup = (data) => (dispatch) => {
  const formData = new FormData();

  if (data.image) formData.append('image', data.image);
  if (data.name) formData.append('name', data.name);
  formData.append('users', JSON.stringify(data.selectedIds));

  dispatch({ type: actionTypes.ACTION_SHOW_LOADER });
  return apis.group(formData).then((res) => {
    return res.success
      ? (dispatch({
          type: actionTypes.ACTION_UPDATE_CONTACT_LIST,
          payload: res.data,
        }),
        dispatch({ type: actionTypes.ACTION_HIDE_LOADER, success: true }))
      : (dispatchEvent({ type: actionTypes.ACTION_SHOW_ALERT, payload: 'This email does not have accound' }),
        dispatch({ type: actionTypes.ACTION_HIDE_LOADER }));
  });
};

export const getMessages = (data) => (dispatch) => {
  return apis.messages(data).then((res) => {
    return res.success
      ? dispatch({
          type: actionTypes.ACTION_MESSAGES_LIST,
          payload: res.data,
        })
      : null;
  });
};

export const updateContactList = () => (dispatch) => {
  return apis.listContacts().then((res) => {
    return res.success
      ? dispatch({
          type: actionTypes.ACTION_UPDATE_CONTACT_LIST,
          payload: res.data,
        })
      : null;
  });
};

export const updateCurentContact = (data) => (dispatch) => dispatch({ type: actionTypes.ACTION_UPDATE_CURRENT_CONTACT, payload: data });
