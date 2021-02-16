import React from 'react';
import './styles/App.scss';

import { Header } from './components';
import { Content } from './components';

export const App = () => (
  <div className="App">
    <Header />
    <Content />
  </div>
);
