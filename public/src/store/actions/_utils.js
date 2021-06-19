import { actionTypes } from '../_actions.types';

export const showAlert = (data) => (dispatch) => dispatch({ type: actionTypes.ACTION_SHOW_ALERT, payload: data });

export const hideAlert = () => (dispatch) => dispatch({ type: actionTypes.ACTION_HIDE_ALERT });

export const showLoader = () => (dispatch) => dispatch({ type: actionTypes.ACTION_SHOW_LOADER });

export const hideLoader = () => (dispatch) => dispatch({ type: actionTypes.ACTION_HIDE_LOADER });

export const updateScreenWidth = (data) => (dispatch) => dispatch({ type: actionTypes.ACTION_UPDATE_SCREEN_WIDTH, payload: data });

export const updateScreenView = (data) => (dispatch) => dispatch({ type: actionTypes.ACTION_UPDATE_SCREEN_VIEW, payload: data });
