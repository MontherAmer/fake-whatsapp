import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actionTypes } from '../store/_actions.types';

const Alert = () => {
  const dispatch = useDispatch();

  const { show, text } = useSelector((state) => state.utilsState);

  useEffect(() => {
    setTimeout(() => dispatch({ type: actionTypes.ACTION_HIDE_ALERT }), 5000);
  }, [show]);

  return <div className={`alert ${show ? 'show' : ''}`}>{text}</div>;
};

export default Alert;
