import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { LinearProgress } from '@material-ui/core';

import About from './views/pages/About';
import Home from './views/pages/Home';
import NotFound from './views/pages/NotFound';
import Dashboard from './layouts/dashboard-layout/dashboard';
import DashboardDefaultContent from './views/dashboard/dashboard-default-content';
import SettingsAndPravicy from './views/dashboard/settings-and-pravicy';

const Routes = () => {
  return (
    <Suspense fallback={<LinearProgress style={{ margin: '10rem' }} />}>
      <Switch>
        <Route
          path={'/dashboard'}
          render={({ match: { path } }) => (
            <Dashboard>
              <Switch>
                <Route
                  exact
                  path={path + '/'}
                  component={lazy(() =>
                    import('./views/dashboard/dashboard-default-content'),
                  )}
                />
                <Route
                  exact
                  path={path + '/settings-and-pravicy'}
                  component={lazy(() =>
                    import('./views/dashboard/settings-and-pravicy'),
                  )}
                />
              </Switch>
            </Dashboard>
          )}
        ></Route>

        <Route
          exact
          path="/about"
          component={lazy(() => import('./views/pages/About'))}
        />

        <Route exact path="/" component={Home} />

        <Route exact path="/not-found" component={NotFound} />
        <Redirect exact from={'*'} to={'/not-found'} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
