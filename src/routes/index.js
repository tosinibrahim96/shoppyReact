import Home from '../containers/Home';
import Login from '../containers/Login';
import NotFound from '../components/NotFound';

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
    component: NotFound,
    exact: true,
    path: '*'
  }
];
