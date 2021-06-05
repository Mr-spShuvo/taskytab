import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { Loading } from '../common';
import { useAuth } from '../hooks';

export const AppRoute = ({ children, ...rest }) => {
  const { isLoading, user } = useAuth();

  if (isLoading) return <Loading />;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/auth',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};
