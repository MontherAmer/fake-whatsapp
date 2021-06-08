import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { login } from '../../store/_actions';

import { isEmail } from '../../utils/is.email';

const SignIn = ({ changePage }) => {
  const history = useHistory();

  const dispatch = useDispatch();

  const { _id } = useSelector((state) => state.userState);

  const [state, setState] = useState({ email: '', password: '' });

  const handleChange = (e) => setState({ ...state, [e.target.name]: e.target.value });

  const handleClick = () => (isEmail(state.email) && state.password.length > 5 ? dispatch(login(state)) : null);

  if (_id) history.push('/');

  return (
    <div className="d-flex justify-content-center align-items-center h-100" id="auth">
      <div class="login-page">
        <div class="form">
          <div class="login-form">
            <input type="email" name="email" value={state.email} onChange={handleChange} placeholder="Enter email" />
            <input type="password" name="password" value={state.password} onChange={handleChange} placeholder="Enter password" />
            <button onClick={handleClick}>login</button>
            <p class="message">
              Not registered? <a onClick={changePage}>Create an account</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
