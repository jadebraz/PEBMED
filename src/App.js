import React from 'react';

import Header from './components/Header';

import GlobalStyles from './styles/global';

import Routes from './routes';

function App() {
  return (
    <>
      <Header />
      <Routes />
      <GlobalStyles />
    </>
  );
}

export default App;
