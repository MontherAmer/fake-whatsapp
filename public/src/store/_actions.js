import { actionTypes } from './_actions.types';
import { apis } from './_apis';

export const signUp = (data) => (dispatch) => {
  return apis.signup(data).then((res) => {
    return res.success
      ? dispatch({
          type: actionTypes.USER_LOGED_IN,
          payload: res.data,
        })
      : console.log('ERROR', err);
  });
};

export const login = (data) => (dispatch) => {
  return apis.login(data).then((res) => {
    return res.success
      ? dispatch({
          type: actionTypes.USER_LOGED_IN,
          payload: res.data,
        })
      : console.log('ERROR', err);
  });
};
