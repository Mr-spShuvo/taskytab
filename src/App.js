import React, { useContext, useEffect } from 'react';
import './styles/App.scss';

import { Header } from './components';
import { Content } from './components';
import { SelectedTabProvider, TabsProvider, ThemeContext } from './contexts';

export const App = () => {
  const [theme] = useContext(ThemeContext);
  useEffect(() => {
    theme
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark');
  }, [theme]);
  return (
    <TabsProvider>
      <SelectedTabProvider>
        <Header />
        <Content />
      </SelectedTabProvider>
    </TabsProvider>
  );
};
