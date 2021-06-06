import Home from './screens/Home';
import Auth from './screens/Auth';

export default [
  { path: '/auth', component: Auth, exact: true },
  { path: '/', component: Home, exact: false },
];
