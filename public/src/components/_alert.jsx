import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actionTypes } from '../store/_actions.types';

const Alert = () => {
  const dispatch = useDispatch();

  const { show, text } = useSelector((state) => state.alertState);

  useEffect(() => {
    setTimeout(() => dispatch({ type: actionTypes.HIDE_ALERT }), 3000);
  }, [show]);

  return <div className={`alert ${show ? 'show' : 'hide'}`}>{text}</div>;
};

export default Alert;
