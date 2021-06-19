import { actionTypes } from '../_actions.types';
import { apis } from '../_apis';
import store from '../index';

const dispatchEvent = (e) => store().store.dispatch(e);

export const login = (data) => (dispatch) => {
  return apis.login(data).then((res) => {
    return res.success
      ? (dispatch({
          type: actionTypes.ACTION_USER_LOGED_IN,
          payload: res.data,
        }),
        dispatch({ type: actionTypes.ACTION_HIDE_LOADER }))
      : (dispatchEvent({ type: actionTypes.ACTION_SHOW_ALERT, payload: 'Email or password is wrong' }),
        dispatch({ type: actionTypes.ACTION_HIDE_LOADER }));
  });
};

export const signUp = (data) => (dispatch) => {
  dispatch({ type: actionTypes.ACTION_SHOW_LOADER });
  return apis.signup(data).then((res) => {
    return res.success
      ? (dispatch({
          type: actionTypes.ACTION_USER_LOGED_IN,
          payload: res.data,
        }),
        dispatch({ type: actionTypes.ACTION_HIDE_LOADER }))
      : (dispatchEvent({ type: actionTypes.ACTION_SHOW_ALERT, payload: 'Email is allready used' }),
        dispatch({ type: actionTypes.ACTION_HIDE_LOADER }));
  });
};

export const logOut = () => (dispatch) => dispatch({ type: actionTypes.ACTION_USER_LOGED_OUT });

export const updateProfile = (data) => (dispatch) => {
  const formData = new FormData();
  if (data.image) formData.append('image', data.image);
  if (data.name) formData.append('name', data.name);
  return apis.update(formData).then((res) => (res.success ? dispatch({ type: actionTypes.ACTION_UPDATE_PROFILE, payload: res.data }) : null));
};
