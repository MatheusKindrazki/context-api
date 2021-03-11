import React from 'react';

import { BrowserRouter, Switch } from 'react-router-dom'
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';

import Route from './Route'

const RootRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/dash" exact component={Dashboard} isPrivate />
      </Switch>
    </BrowserRouter>
  );
}

export default RootRoutes;