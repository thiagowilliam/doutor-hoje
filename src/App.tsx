import React from 'react';
import GlobalStyles from './styles/global';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './page/Home';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
      <GlobalStyles />
    </>
  );
};

export default App;
