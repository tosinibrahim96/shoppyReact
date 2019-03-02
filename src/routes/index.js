import Home from '../containers/Home';
import Login from '../containers/Login';
import FourOhFour from '../containers/NotFound';
import Category from '../containers/Category';
import Product from '../containers/Product';
import Attendant from '../containers/Attendant';
import UnauthorizedPage from '../containers/Unauthorized';

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
    name: 'categories',
    component: Category,
    exact: true,
    path: '/categories'
  },
  {
    name: 'products',
    component: Product,
    exact: true,
    path: '/products'
  },
  {
    name: 'attendants',
    component: Attendant,
    exact: true,
    path: '/attendants'
  },
  {
    name: 'unauthorized',
    component: UnauthorizedPage,
    exact: true,
    path: '/access-denied'
  },

  {
    name: '404',
    component: FourOhFour,
    exact: true,
    path: '*'
  }
];
