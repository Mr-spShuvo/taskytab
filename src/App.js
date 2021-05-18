import React, { Suspense, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './styles/App.scss';

import { Home } from './pages';
import { Loading } from './common';
import { SelectedTabProvider, TabsProvider, ThemeContext } from './contexts';

export const App = () => {
  const [theme] = useContext(ThemeContext);
  useEffect(() => {
    theme
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark');
  }, [theme]);
  return (
    <Router>
      <TabsProvider>
        <SelectedTabProvider>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Suspense>
        </SelectedTabProvider>
      </TabsProvider>
    </Router>
  );
};
