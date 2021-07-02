import { actionTypes } from '../_actions.types';
import { apis } from '../_apis';
import { isEmail } from '../../utils/is.email';
import store from '../index';

const dispatchEvent = (e) => store().store.dispatch(e);

export const login = (data) => (dispatch) => {
  if (!data.email || !data.password) return dispatch({ type: actionTypes.ACTION_SHOW_ALERT, payload: 'Please fill all fields' });
  if (!isEmail(data.email)) return dispatch({ type: actionTypes.ACTION_SHOW_ALERT, payload: 'Email must be in email format' });
  dispatch({ type: actionTypes.ACTION_SHOW_LOADER });
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
  if (!data.email || !data.name || !data.password) return dispatch({ type: actionTypes.ACTION_SHOW_ALERT, payload: 'Please fill all fields' });
  if (!isEmail(data.email)) return dispatch({ type: actionTypes.ACTION_SHOW_ALERT, payload: 'Email must be in email format' });
  if (!isEmail(data.password.length < 5)) return dispatch({ type: actionTypes.ACTION_SHOW_ALERT, payload: 'Password should be 5 char' });
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
