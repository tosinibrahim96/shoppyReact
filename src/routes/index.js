import Home from '../containers/Home';
import Login from '../containers/Login';
import FourOhFour from '../containers/NotFound';

export default [
  {
    name: 'home',
    component: Home,
    exact: true,
    path: '/'
  },
  {
    name: 'login',
    component: Login,
    exact: true,
    path: '/login'
  },
  {
    name: '404',
    component: FourOhFour,
    exact: true,
    path: '*'
  }
];
