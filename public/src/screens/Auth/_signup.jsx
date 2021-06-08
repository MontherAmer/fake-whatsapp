import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { signUp } from '../../store/_actions';

import { isEmail } from '../../utils/is.email';

const SignUp = ({ changePage }) => {
  const history = useHistory();

  const dispatch = useDispatch();

  const { _id } = useSelector((state) => state.userState);

  const [state, setState] = useState({ email: '', password: '' });

  const handleChange = (e) => setState({ ...state, [e.target.name]: e.target.value });

  const handleClick = () => (isEmail(state.email) && state.password.length > 5 ? dispatch(signUp(state)) : null);

  if (_id) history.push('/');

  return (
    <div className="d-flex justify-content-center align-items-center h-100" id="auth">
      <div class="login-page">
        <div class="form">
          <div class="login-form">
            <input type="text" name="name" value={state.name} onChange={handleChange} placeholder="Enter name" />
            <input type="email" name="email" value={state.email} onChange={handleChange} placeholder="Enter email" />
            <input type="password" name="password" value={state.password} onChange={handleChange} placeholder="Enter password" />
            <button onClick={handleClick}>Sing up</button>
            <p class="message">
              Already registered? <a onClick={changePage}>Sign In</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
