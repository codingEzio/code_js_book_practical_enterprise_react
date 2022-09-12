import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import About from './views/pages/About';
import Home from './views/pages/Home';
import NotFound from './views/pages/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/" component={Home} />

      <Route exact path="/not-found" component={NotFound} />
      <Redirect exact from={'*'} to={'/not-found'} />
    </Switch>
  );
};

export default Routes;
