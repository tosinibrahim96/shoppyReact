import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import routes from './routes';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <Router>
    <React.Fragment>
      <Switch>
        {routes.map(route => (
          <Route
            key={route.name}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
      </Switch>
      <ToastContainer />
    </React.Fragment>
  </Router>
);

export default App;
