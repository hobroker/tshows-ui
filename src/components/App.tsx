import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import Router from './Router';
import Navigation from '../features/navigation/components/Navigation';
import Theme from '../features/theme/components/Theme';
import client from '../features/apollo/client';
import RootContextProvider from '../contexts/RootContextProvider';
import PageWrapper from './PageWrapper';

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
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
