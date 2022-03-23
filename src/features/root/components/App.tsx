import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Navigation from '../../navigation/components/Navigation';
import Theme from '../../theme/components/Theme';

const App = () => (
  <BrowserRouter>
    <Theme>
      <Navigation />
      <Router />
    </Theme>
  </BrowserRouter>
);

export default App;
