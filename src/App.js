import React from 'react';
import './styles/App.scss';

import { Header } from './components';
import { Content } from './components';
import { SelectedTabProvider, TabsProvider } from './contexts';

export const App = () => (
  <TabsProvider>
    <SelectedTabProvider>
      <Header />
      <Content />
    </SelectedTabProvider>
  </TabsProvider>
);
