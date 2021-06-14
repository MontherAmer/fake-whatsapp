import { actionTypes } from './_actions.types';
import { apis } from './_apis';
import store from './index';

const dispatchEvent = (e) => store().store.dispatch(e);

export const showAlert = (data) => (dispatch) => dispatch({ type: actionTypes.SHOW_ALERT, payload: data });

export const hideAlert = () => (dispatch) => dispatch({ type: actionTypes.HIDE_ALERT });

export const showLoader = () => (dispatch) => dispatch({ type: actionTypes.SHOW_LOADER });

export const hideLoader = () => (dispatch) => dispatch({ type: actionTypes.HIDE_LOADER });

export const logOut = () => (dispatch) => dispatch({ type: actionTypes.USER_LOGED_OUT });

export const updateScreenWidth = (data) => (dispatch) => dispatch({ type: actionTypes.UPDATE_SCREEN_WIDTH, payload: data });

export const updateScreenView = (data) => (dispatch) => dispatch({ type: actionTypes.UPDATE_SCREEN_VIEW, payload: data });

export const signUp = (data) => (dispatch) => {
  dispatch({ type: actionTypes.SHOW_LOADER });
  return apis.signup(data).then((res) => {
    return res.success
      ? (dispatch({
          type: actionTypes.USER_LOGED_IN,
          payload: res.data,
        }),
        dispatch({ type: actionTypes.HIDE_LOADER }))
      : (dispatchEvent({ type: actionTypes.SHOW_ALERT, payload: 'Email is allready used' }), dispatch({ type: actionTypes.HIDE_LOADER }));
  });
};

export const login = (data) => (dispatch) => {
  return apis.login(data).then((res) => {
    return res.success
      ? (dispatch({
          type: actionTypes.USER_LOGED_IN,
          payload: res.data,
        }),
        dispatch({ type: actionTypes.HIDE_LOADER }))
      : (dispatchEvent({ type: actionTypes.SHOW_ALERT, payload: 'Email or password is wrong' }), dispatch({ type: actionTypes.HIDE_LOADER }));
  });
};

export const addFriend = (data) => (dispatch) => {
  dispatch({ type: actionTypes.SHOW_LOADER });
  return apis.friend(data).then((res) => {
    console.log('this is my response ', res);
    return res.success
      ? (dispatch({
          type: actionTypes.UPDATE_CONTACT_LIST,
          payload: res.data,
        }),
        dispatch({ type: actionTypes.HIDE_LOADER, success: true }))
      : (dispatchEvent({ type: actionTypes.SHOW_ALERT, payload: 'This email does not have accound' }),
        dispatch({ type: actionTypes.HIDE_LOADER }));
  });
};

export const createGroup = (data) => (dispatch) => {
  const formData = new FormData();

  if (data.image) formData.append('image', data.image);
  if (data.name) formData.append('name', data.name);
  formData.append('users', JSON.stringify(data.selectedIds));

  dispatch({ type: actionTypes.SHOW_LOADER });
  return apis.group(formData).then((res) => {
    console.log('this is my response ', res);
    return res.success
      ? (dispatch({
          type: actionTypes.UPDATE_CONTACT_LIST,
          payload: res.data,
        }),
        dispatch({ type: actionTypes.HIDE_LOADER, success: true }))
      : (dispatchEvent({ type: actionTypes.SHOW_ALERT, payload: 'This email does not have accound' }),
        dispatch({ type: actionTypes.HIDE_LOADER }));
  });
};

export const updateProfile = (data) => (dispatch) => {
  console.log(data);
  const formData = new FormData();
  if (data.image) formData.append('image', data.image);
  if (data.name) formData.append('name', data.name);
  return apis.update(formData).then((res) => (res.success ? dispatch({ type: actionTypes.UPDATE_PROFILE, payload: res.data }) : null));
};

export const getMessages = (data) => (dispatch) => {
  return apis.messages(data).then((res) => {
    return res.success
      ? dispatch({
          type: actionTypes.MESSAGES_LIST,
          payload: res.data,
        })
      : null;
  });
};

export const updateCurentContact = (data) => (dispatch) => dispatch({ type: actionTypes.UPDATE_CURRENT_CONTACT, payload: data });
