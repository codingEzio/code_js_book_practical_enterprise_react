import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import About from './views/pages/About';
import Home from './views/pages/Home';
import NotFound from './views/pages/NotFound';
import Dashboard from './layouts/dashboard-layout/dashboard';
import DashboardDefaultContent from './views/dashboard/dashboard-default-content';
import SettingsAndPravicy from './views/dashboard/settings-and-pravicy';

const Routes = () => {
  return (
    <Switch>
      <Route
        path={'/dashboard'}
        render={({ match: { path } }) => (
          <Dashboard>
            <Switch>
              <Route
                exact
                path={path + '/'}
                component={DashboardDefaultContent}
              />
            </Switch>
          </Dashboard>
        )}
      ></Route>

      <Route exact path="/about" component={About} />
      <Route exact path="/" component={Home} />

      <Route exact path="/not-found" component={NotFound} />
      <Redirect exact from={'*'} to={'/not-found'} />
    </Switch>
  );
};

export default Routes;
