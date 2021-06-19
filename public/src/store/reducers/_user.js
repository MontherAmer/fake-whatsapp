import { actionTypes } from '../_actions.types';

const initialState = { _id: '', email: '', name: '', token: '' };

const userState = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ACTION_USER_LOGED_IN:
      let { _id, email, name, token } = payload;
      return { ...state, _id, email, name, token };
    case actionTypes.ACTION_UPDATE_PROFILE:
      return { ...state, ...payload };
    case actionTypes.ACTION_USER_LOGED_OUT:
      return {};
    default:
      return state;
  }
};

export default userState;
