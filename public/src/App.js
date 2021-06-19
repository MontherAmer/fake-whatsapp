import React, { useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import routes from './routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import useWindowSize from './hooks/windowSize';
import { ThemeContext } from './context/ThemeContext';

import { updateScreenWidth } from './store/actions';

import Alert from './components/_alert';
import Loader from './components/_loader';

const App = () => {
  const dispatch = useDispatch();
  const width = useWindowSize();

  useEffect(() => {
    dispatch(updateScreenWidth(width));
  }, [width]);

  const { darkMode } = useContext(ThemeContext);

  return (
    <div id={darkMode ? 'darkApp' : 'App'}>
      <Router>
        <Switch>
          {routes.map((route) => (
            <Route key={route.key} path={route.path} render={() => <route.component />} exact={route.exact} />
          ))}
        </Switch>
      </Router>
      <Alert />
      <Loader />
    </div>
  );
};

export default App;
