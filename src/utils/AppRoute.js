import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useAuth } from '../hooks';

export const AppRoute = ({ children, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !user ? (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        ) : (
          children
        )
      }
    />
  );
};
