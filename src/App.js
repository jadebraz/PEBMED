import React from 'react';

import Header from './components/Header';

import GlobalStyles from './styles/global';

import AppProvider from './hooks';

import Routes from './routes';

function App() {
  return (
    <>
      <AppProvider>
        <Header />
        <Routes />
        <GlobalStyles />
      </AppProvider>
    </>
  );
}

export default App;
