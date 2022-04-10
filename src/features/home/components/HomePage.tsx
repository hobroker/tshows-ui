import React from 'react';
import PageWrapper from '../../../components/PageWrapper';
import UpNextProvider from '../contexts/UpNextContext';
import UpNextSection from './UpNextSection';

const HomePage = () => (
  <PageWrapper>
    <UpNextProvider>
      <UpNextSection />
    </UpNextProvider>
  </PageWrapper>
);

export default HomePage;
