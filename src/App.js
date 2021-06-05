import React, { Suspense, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './styles/App.scss';

import { AuthPage, Home } from './pages';
import { Loading } from './common';
import {
  AuthProvider,
  SelectedTabProvider,
  TabsProvider,
  ThemeContext
} from './contexts';
import { AppRoute } from './utils';

export const App = () => {
  const [theme] = useContext(ThemeContext);
  useEffect(() => {
    theme
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark');
  }, [theme]);

  return (
    <Router>
      <AuthProvider>
        <TabsProvider>
          <SelectedTabProvider>
            <Suspense fallback={<Loading />}>
              <Switch>
                <AppRoute exact path="/">
                  <Home />
                </AppRoute>
                <Route path="/auth">
                  <AuthPage />
                </Route>
                <AppRoute path="/inbox">
                  <h3>Inbox</h3>
                </AppRoute>
              </Switch>
            </Suspense>
          </SelectedTabProvider>
        </TabsProvider>
      </AuthProvider>
    </Router>
  );
};
