import Home from '../components/Home';
import NotFound from '../components/NotFound';

export default [
  {
    name: 'home',
    component: Home,
    exact: true,
    path: '/',
  },

  {
    name: '404',
    component: NotFound,
    exact: true,
    path: '*',
  },
];
