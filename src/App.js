import React from 'react';
//import 'normalize.css'; // Normalize CSS
import './assets/scss/App.scss';

import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';

export const App = () => (
  <div className="App">
    <Header />
    <Content />
  </div>
);
