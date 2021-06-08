import React, { useState } from 'react';

const SignUp = ({ changePage }) => {
  const [state, setState] = useState({ email: '', password: '', name: '' });

  const handleChange = (e) => setState({ ...state, [e.target.name]: e.target.value });

  const handleClick = () => console.log(state);

  return (
    <div className="d-flex justify-content-center align-items-center h-100" id="auth">
      <div class="login-page">
        <div class="form">
          <form class="login-form">
            <input type="text" name="name" value={state.name} onChange={handleChange} placeholder="Enter name" />
            <input type="email" name="email" value={state.email} onChange={handleChange} placeholder="Enter email" />
            <input type="password" name="password" value={state.password} onChange={handleChange} placeholder="Enter password" />
            <button onClick={handleClick}>login</button>
            <p class="message">
              Already registered? <a onClick={changePage}>Sign In</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
