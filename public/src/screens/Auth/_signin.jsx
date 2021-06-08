import React, { useState } from 'react';

const SignIn = ({ changePage }) => {
  const [state, setState] = useState({ email: '', password: '' });

  const handleChange = (e) => setState({ ...state, [e.target.name]: e.target.value });

  const handleClick = () => console.log(state);

  return (
    <div className="d-flex justify-content-center align-items-center h-100" id="auth">
      <div class="login-page">
        <div class="form">
          <form class="login-form">
            <input type="email" name="email" value={state.email} onChange={handleChange} placeholder="Enter email" />
            <input type="password" name="password" value={state.password} onChange={handleChange} placeholder="Enter password" />
            <button onClick={handleClick}>login</button>
            <p class="message">
              Not registered? <a onClick={changePage}>Create an account</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
