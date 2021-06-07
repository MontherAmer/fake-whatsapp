import React from 'react';
import ReactDOM from 'react-dom';
import ScreenContext from './context/ScreenContext';

import App from './App';

import './index.scss';
const render = (Component) => {
  return ReactDOM.render(
    <ScreenContext>
      <Component />
    </ScreenContext>,
    document.getElementById('root')
  );
};

render(App);
