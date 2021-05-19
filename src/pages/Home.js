import React, { useContext } from 'react';
import { Content, Header } from '../components';
import { AuthContext } from '../contexts';
const LandingPage = React.lazy(() => import('./LandingPage'));

const Home = () => {
  const { user } = useContext(AuthContext);
  return !user ? (
    <LandingPage />
  ) : (
    <>
      <Header />
      <Content />
    </>
  );
};

export default Home;
