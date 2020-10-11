import React from 'react'
import { Switch, Route } from 'react-router-dom';
import App from './components/App';
import Home from './components/screens/home/Home';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </App>

export default AppRoutes;
