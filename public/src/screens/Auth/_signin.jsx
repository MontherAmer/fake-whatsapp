import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { login } from '../../store/actions';

import { isEmail } from '../../utils/is.email';

const SignIn = ({ changePage }) => {
  const history = useHistory();

  const dispatch = useDispatch();

  const { _id } = useSelector((state) => state.userState);

  const [state, setState] = useState({ email: '', password: '' });

  const handleChange = (e) => setState({ ...state, [e.target.name]: e.target.value });

  const handleClick = () => dispatch(login(state));

  if (_id) history.push('/');

  return (
    <div className="d-flex justify-content-center align-items-center h-100" id="auth">
      <div className="login-page">
        <div className="form">
          <div className="login-form">
            <input type="email" name="email" autoComplete="off" value={state.email} onChange={handleChange} placeholder="Enter email" />
            <input
              type="password"
              name="password"
              autoComplete="off"
              value={state.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
            <button onClick={handleClick}>login</button>
            <p className="message">
              Not registered? <a onClick={changePage}>Create an account</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
