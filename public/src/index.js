import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore from './store';
import { preStartApisFunction } from './store/_apis';
import ThemeContext from './context/ThemeContext';
import SocketContext from './context/SocketContext';

import App from './App';

import './assets/styles/index.scss';

export const { store, persistor } = configureStore();

preStartApisFunction();

const render = (Component) => {
  return ReactDOM.render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeContext>
          <SocketContext>
            <Component />
          </SocketContext>
        </ThemeContext>
      </PersistGate>
    </Provider>,
    document.getElementById('root')
  );
};

render(App);
