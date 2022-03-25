import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import Router from './Router';
import Navigation from '../../navigation/components/Navigation';
import Theme from '../../theme/components/Theme';
import client from '../../apollo/client';

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Theme>
        <Navigation />
        <Router />
      </Theme>
    </BrowserRouter>
  </ApolloProvider>
);

export default App;
