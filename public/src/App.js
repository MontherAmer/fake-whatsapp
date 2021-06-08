import React, { useContext } from 'react';
import routes from './routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ScreenContext } from './context/ScreenContext';
import Alert from './components/_alert';
const App = () => {
  const { darkMode } = useContext(ScreenContext);
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
    </div>
  );
};

export default App;
