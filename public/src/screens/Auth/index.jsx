import React, { useState } from 'react';

import SignUp from './_signup';
import SignIn from './_signin';

const Auth = () => {
  const [state, setState] = useState({ page: 'SIGNIN' });

  const changePage = () => setState({ ...state, page: state.page === 'SIGNIN' ? 'SIGNUP' : 'SIGNIN' });

  return state.page === 'SIGNIN' ? <SignIn changePage={changePage} /> : <SignUp changePage={changePage} />;
};

export default Auth;
