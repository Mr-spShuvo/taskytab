import React, { useContext } from 'react';
import { Content, Header } from '../components';
import { AuthContext } from '../contexts';
import Login from './Login';

const Home = () => {
  const { user } = useContext(AuthContext);
  return !user ? (
    <Login />
  ) : (
    <>
      <Header />
      <Content />
    </>
  );
};

export default Home;
