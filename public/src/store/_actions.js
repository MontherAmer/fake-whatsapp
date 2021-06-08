import { actionTypes } from './_actions.types';
import { apis } from './_apis';
import store from './index';

const dispatchEvent = (e) => store().store.dispatch(e);

export const showAlert = (data) => (dispatch) => dispatch({ type: actionTypes.SHOW_ALERT, payload: data });

export const hideAlert = () => (dispatch) => dispatch({ type: actionTypes.HIDE_ALERT });

export const signUp = (data) => (dispatch) => {
  return apis.signup(data).then((res) => {
    return res.success
      ? dispatch({
          type: actionTypes.USER_LOGED_IN,
          payload: res.data,
        })
      : dispatchEvent({ type: actionTypes.SHOW_ALERT, payload: 'Email is allready used' });
  });
};

export const login = (data) => (dispatch) => {
  return apis.login(data).then((res) => {
    return res.success
      ? dispatch({
          type: actionTypes.USER_LOGED_IN,
          payload: res.data,
        })
      : dispatchEvent({ type: actionTypes.SHOW_ALERT, payload: 'Email or password is wrong' });
  });
};
