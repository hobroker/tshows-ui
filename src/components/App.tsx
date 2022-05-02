import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import Navigation from '../features/navigation/components/Navigation';
import Theme from '../features/theme/components/Theme';
import client from '../features/apollo/client';
import RootContextProvider from '../contexts/RootContextProvider';
import Router from '../features/router/components/Router';
import ScrollToTop from '../features/router/components/ScrollToTop';

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ScrollToTop />
      <Theme>
        <RootContextProvider>
          <Navigation />
          <Router />
        </RootContextProvider>
      </Theme>
    </BrowserRouter>
  </ApolloProvider>
);

export default App;
