import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './views/pages/About';
import Home from './views/pages/Home';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
